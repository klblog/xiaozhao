import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { readFileSync, readdirSync, promises, existsSync, writeFileSync, mkdirSync, renameSync } from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter';
import { ICreateFileOptions } from 'src/interface/file';
import { IFileStatus } from 'src/enums/file';

@Injectable()
export class FileService {
  /**
   * 读取 blogs 里面的文件组装成数组返回
   * @returns {Array}
   *  [
   *     {
   *      name:  'cad',
   *      children: [ 
   *          { title: 'xxx', tags: 'xxx', date: 'xxx', content: 'xxx', categories: 'xxx'  } 
   *          ]
   *      }
   *  ]
   *
   */
  // ------ ------
  getFileInjectable() {

    const paths = join(__dirname, '../', '../', '../blogs')
    const folders = readdirSync(paths, { withFileTypes: true });
    const files = folders.filter(item => item.isDirectory()).map(item => ({ name: item.name, children: this.getMarkdownFiles(join(paths, item.name)) }));
    return files
  }

  private getMarkdownFiles(dir: string) {
    const folders = readdirSync(dir)
    const mds = folders.filter(item => item.endsWith('.md')).map(item => { 
      const content = readFileSync(join(dir, item), 'utf-8')
      const { data, content: body } = matter(content)
      return {
        title: data.title,
        tags: data.tags.filter((item) => item),
        author: data.author,
        date: data.date,
        content: body,
        categories: item.replace('md', '')
      }
     })

     return mds
  }
  // ------ ------


  /**
   * 在blogs中创建、修改、删除文件夹
   * @param {string} originFolderName - 原始文件名
   * @returns {string} 创建结果
  */
  // ------ ------
  async createFolderInjectable(originFolderName: string, folderName: string) {
    const basePath = join(__dirname, '../', '../', '../blogs')
    const originPath = join(basePath, originFolderName)
    const newPath = join(basePath, folderName)
    if(!originFolderName) {
      // 创建文件夹
      try {
      await promises.mkdir(newPath)
      return '创建成功'
      } catch (error) {
        throw new HttpException('创建失败', HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }

    try {
      // 检查原始文件夹是否存在
      await promises.access(originPath)
    } catch (error) {
      throw new HttpException('原始文件夹不存在', HttpStatus.NOT_FOUND)
    }

    if(!folderName && originFolderName) {
      // 删除文件夹
        try {
          await promises.rm(originPath, { recursive: true })
          return '删除成功'
        } catch (error) {
          throw new HttpException('删除失败', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // 修改文件夹名称
    try {
      await promises.rename(originPath, newPath)
      return '修改成功'
    } catch (error) {
      throw new HttpException('修改失败', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  // ------ ------

  /**
   * 在blogs文件夹下的指定文件夹中创建、修改markdown文件
  * @param {Object} options - 创建markdown文件所需的选项
  * @param {string} options.title - 文件的标题
  * @param {string[]} options.tags - 文件的标签
  * @param {string} options.date - 文件的日期
  * @param {string} options.content - 文件的内容
  * @param {string} options.categories - 文件的分类
   * @return {string} 创建结果
  */

  async createMarkdownFileInjectable(options: ICreateFileOptions) {
    const { origin, name, title, tags, date, content, categories, status } = options

    const basePath = join(__dirname, '../', '../', '../blogs')
    const folderPath = join(basePath, categories)

    if(!existsSync(folderPath)) {
      mkdirSync(folderPath, { recursive: true })
    }

    const filePath = join(folderPath, `${name}.md`)
    const originPath = join(folderPath, `${origin}.md`)

    // 前置判断：创建
    if(status  === IFileStatus.create && existsSync(filePath)) {
      throw new HttpException('文件名已被创建，请更换名称', HttpStatus.BAD_REQUEST)
    }

    if(status === IFileStatus.update && !existsSync(originPath)) {
      throw new HttpException('不存在该文件', HttpStatus.BAD_REQUEST)
    }

    // 修改、创建文件
    const fileContent =`---
title: ${title},
date: ${date},
tags: 
  - ${tags.join('\n - ')}
categories:
  - ${categories}
---

${content}
`
    await writeFileSync(filePath, fileContent, 'utf-8')

    // 修改文件时，如果修改前后名称不一致，需要删除原来的文件
    if(origin !== name && existsSync(originPath)) {
      this.removeMarkdownFileInjectable(categories, origin)
    }

    return '保存成功'
    // 删除文件
  }

   async removeMarkdownFileInjectable(categories: string, fileName: string) {
    const basePath = join(__dirname, '../', '../', '../blogs')
    const folderPath = join(basePath, categories)
    const filePath = join(folderPath, `${fileName}.md`)
    
    const backupsBlogs = join(__dirname, '../', '../', '../backupsBlogs')
    let backupsBlogsFilePath =  join(backupsBlogs, `${fileName}.md`)
    // 检查文件是否存在
    if(!existsSync(filePath)) {
      throw new HttpException('文件不存在', HttpStatus.NOT_FOUND)
    }

    if(existsSync(backupsBlogsFilePath)) {
      const timestamp = Date.now();
      backupsBlogsFilePath = join(backupsBlogs, `${fileName}-${timestamp}.md`)
    }
    // 移动 filePath 文件到 backupsBlogs
    await renameSync(filePath, backupsBlogsFilePath)
    return '删除成功'
  }
}
