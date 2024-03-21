export interface IhomeOptions {
  title: string
  description: string
  tagline: string
  buttons: { text: string, link: string, type: string }[]
  features?: { title: string, details: string }[]
  content: string
}

export interface IHomeNavigationAutoAddCategoryToNavbar {
  location: number
  categoryText: string
  tagText: string
}

export interface IHomeNavigatioBulletinBody {
  text: string
  content: string
}

export interface IHomeNavigatioBulletin {
  status: boolean
  title: string 
  body1Content: string
  body2: IHomeNavigatioBulletinBody
  body4: IHomeNavigatioBulletinBody
  body5Text: string
}

export interface IHomeNavigationOptions {
  title: string
  description: string
  colorMode: 'dark' | 'light',
  author: string
  autoAddCategoryToNavbar: IHomeNavigationAutoAddCategoryToNavbar
  navbarContact: string
  bulletin: IHomeNavigatioBulletin
}