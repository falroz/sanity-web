import {defineField, defineType} from 'sanity'
import image from '../components/image'

export default defineType({
  name: 'hero-home',
  title: 'Hero Home',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      ...image,
    }),
  ],
})
