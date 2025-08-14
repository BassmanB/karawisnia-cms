export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    { name: 'title', title: 'title', type: 'string' },
    { name: 'projectOverviewTitle', title: "description title", type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'projectOverview', title: 'Overview', type: 'array', of: [{ type: 'block' }] },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }],
      options:{
        list: [
            { title: "all", value: "all" },
            { title: "branding", value: "branding"},
            { title: "exhibition", value: "exhibition" },
            { title: "logo", value: "logo" },
            { title: "poster", value: "poster" },
            { title: "information", value: "information" },
            { title: "typography", value: "typography" },
            { title: "ux", value: "ux" },
            { title: "ui", value: "ui" },
            { title: "workshops", value: "workshops" }
        ]
    }},
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'caption', title: 'Description', type: 'string' }
          ]
        }
      ]
    },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'cooperation', title: 'Cooperation', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'images2',
      title: 'Images 2',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'caption', title: 'Description', type: 'string' }
          ]
        }
      ]
    },
    { name: 'conceptDevelopmentTitle', title: "description left section title", type: 'string'},
    { name: 'conceptDevelopment', title: "description left section",  type: 'array', of: [{ type: 'block' }] },
    { name: 'designApproachTitle', title: "description title right section", type: 'string' },
    { name: 'designApproach', title: "descritpion right section",  type: 'array', of: [{ type: 'block' }] },
    { name: 'videoId', title: 'Video', type: 'string'},
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'id', title: 'ID', type: 'string' }
  ],
}

