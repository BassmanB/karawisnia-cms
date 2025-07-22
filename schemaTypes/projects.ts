export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'projectOverviewTitle', title: "description title", type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'projectOverview', title: 'Overview', type: 'array', of: [{ type: 'block' }] },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }] },
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
    { name: 'cooperation', title: 'Cooperation', type: 'string' },
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
    { name: 'designDetailsTitle', title: 'Section 2 title', type: 'string'},
    { name: 'designApproachTitle', title: "description title 2", type: 'string' },
    { name: 'designApproach', title: "descritpion 2", type: 'text' },
    { name: 'videoId', title: 'Video', type: 'string'},
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'id', title: 'ID', type: 'string' },
  ],
}

