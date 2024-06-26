import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import * as matter from 'gray-matter'
import { IHomeNavigationOptions, IhomeOptions } from 'src/interface/home';
import { notNull } from 'src/utils/help';


@Injectable()
export class HomeService {
  /** 
   * 装饰内容：读取README.md 中的内容，解析出 
   * @typedef {Object} MarkdownObject - 组装好的markdown 对象
   * @property {string} title - 标题
   * @property {string} description - 描写
   * @property {string} tagline - 宣传词
   * @property {Array}  buttons - 描述
   * @property {Object} buttons.text - 按钮文案
   * @property {Object} buttons.link - 链接地址
   * @property {Object} buttons.type - 按钮类型
   * @property {Array}  features - 特色
   * @property {Object} features.title - 标题
   * @property {Object} features.details - 描述
   * @property {string} content - 标题
   * @returns {MarkdownObject} 
   * 
  */ 
  getHomeDetailMd() {
    try {
      const basePath = join(__dirname, '../', '../', '../README.md')
      const md = readFileSync(basePath, 'utf-8')
      const { data, content } = matter(md)
  
      return {
        title: data.bannerBrand.title,
        description: data.bannerBrand.description,
        tagline: data.bannerBrand.tagline,
        buttons: data.bannerBrand.buttons,
        features: data.features,
        content
      }
    } catch (error) {
      throw new HttpException('获取失败', HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }

  /**
   * 装饰内容：设置README.md中的内容，但需要先解析出来
   * @param {Object} options - 需要被设置到README.md中的值
   * @param {string} options.title - 被设置的标题
   * @param {string} options.description - 被设置的描写词
   * @param {string} options.tagline - 宣传词
   * @param {Array}  options.buttons - 被设置的描写词
   * @param {Object} options.buttons.text - 被设置的按钮文案
   * @param {Object} options.buttons.link - 被设置的链接地址
   * @param {Object} options.buttons.type - 被设置的按钮类型
   * @param {Array}  options.features - 被设置的特色
   * @param {Object} options.features.title - 被设置特色标题
   * @param {Object} options.features.details - 被设置的按钮类型
   * @param {string} options.content - 被设置的底部内容
   */
  setHomeDetailMd(options: IhomeOptions) {
    try {
      const basePath = join(__dirname, '../', '../', '../README.md')
      const mds = readFileSync(basePath, 'utf-8')
      const { data } = matter(mds)
      const newData: any = {
        ...data,
        bannerBrand: {
          bgImage: data.bannerBrand.bgImage,
          title: options.title,
          description: options.description,
          tagline: options.tagline,
          buttons: options.buttons,
        },
      }

      if(notNull(data.features)) {
        newData.features = data.features
      }
  
      const newMds = matter.stringify(options.content, newData) // 将接收到的内容反向写回到README.md
      writeFileSync(basePath, newMds)
    } catch (error) {
      throw new HttpException('设置失败', HttpStatus.INTERNAL_SERVER_ERROR)
    } 

    return '设置完成'
  }

  /**
   * 导航栏、公告： 读取.vuepress/json/config.json中的内容
  */
  getHomeNavItem() {
    try {
      const basePath =  join(__dirname, '../', '../', '../.vuepress/json/')
      const filePath = join(basePath, 'config.json')
      const config = JSON.parse(readFileSync(filePath, 'utf-8'))
      
      return config
    } catch (error) {
      throw new HttpException('读取失败', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * 导航栏、公告： 存储.vuepress/json/config.json中的内容
  */
  setHomeNavItem(options: IHomeNavigationOptions) {
    try {
      const basePath =  join(__dirname, '../', '../', '../.vuepress/json/')
      const filePath = join(basePath, 'config.json')
      const config = JSON.parse(readFileSync(filePath, 'utf-8'))

      const newConfig ={
        ...config,
        ...options
      }
      
      writeFileSync(filePath, JSON.stringify(newConfig, null, 2), 'utf-8')

      return '设置完成'
    } catch (error) {
      throw new HttpException('设置失败', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}