import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import document from './shared/document'
import section from './shared/section'

const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    {
      name: 'info',
      title: 'Info',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  icon: HomeIcon,
  fields: [
    ...document.map((field) => {
      field.group = 'info'
      return field
    }),
    ...section.map((field) => {
      field.group = 'content'
      return field
    }),
  ],
})

export default home
