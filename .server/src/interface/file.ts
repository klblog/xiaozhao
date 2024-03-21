import type { IFileStatus } from "src/enums/file"

export interface ICreateFileOptions {
  origin: string | null
  status: IFileStatus
  name: string
  title: string
  tags: string[]
  date: string
  content: string
  categories: string
}

export interface ICreateFolderOptions {
  originName: string | null
  newName: string
}
