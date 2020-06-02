export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed6787bec7ef9083077ec7b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kbzxxpd2',
                  apiId: '2af484d8-f938-4fc1-9878-fe8699a19e84'
                },
                {
                  buildHookId: '5ed6787b079af3344613cb40',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hsn175q8',
                  apiId: '08aad7cd-b813-449d-8782-ca963a4095d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bichan17/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hsn175q8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
