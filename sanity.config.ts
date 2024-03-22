import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {pageStructure, singletonPlugin} from './plugins/settings'
import home from './schemaTypes/home'

export default defineConfig({
  name: 'default',
  title: 'sanity-web',

  projectId: 'z3m7grgr',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: pageStructure([home]),
    }),
    visionTool(),
    singletonPlugin([home.name]),
  ],

  schema: {
    types: schemaTypes,
  },
})
