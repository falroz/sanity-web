export interface ImageType {
  type: string
  name: string
  fields: {
    name: string
    title: string
    description: string
    type: string
  }[]
  options: {
    hotspot: boolean
    storeOriginalFilename: boolean
  }
}

const thumbnail: ImageType = {
  type: 'image',
  name: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alternative text for screen readers',
      description:
        "Optional. If the caption above is descriptive enough, there's no need to fill this field. Else, consider adding alternative text to make content more accessible.",
      type: 'string',
    },
  ],
  options: {
    hotspot: true,
    storeOriginalFilename: false,
  },
}
export default thumbnail
