import {defineField} from 'sanity'
const layouts = [{type: 'hero-home'}, {type: 'text-image-layout'}]
export default [
  defineField({
    name: 'section',
    title: 'Sections',
    type: 'array',
    of: layouts,
  }),
]
