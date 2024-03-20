import { Injectable } from '@nestjs/common';
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter';

@Injectable()
export class FileService {
  getFileInjectable() {
    /**
     * 目的： 读取 blog 里面的文件组装成数组返回
     * 格式：
     *  [
     *     {
     *      name:  'cad',
     *      children: [ { title: 'xxx', tags: 'xxx', date: 'xxx', content: 'xxx', categories: 'xxx'  } ]
     *      }
     *  ]
     *
     */
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
}
