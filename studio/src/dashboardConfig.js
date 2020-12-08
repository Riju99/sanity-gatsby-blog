export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf38f50c7b907d379cbbf0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gk56i1gy',
                  apiId: '13a144fc-9bd8-40be-b1b8-5b08083b5e37'
                },
                {
                  buildHookId: '5fcf38f5f438868355938a53',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vptr74no',
                  apiId: '35f5bae1-9de4-4c9a-baf7-7b776137bcb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Riju99/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vptr74no.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
