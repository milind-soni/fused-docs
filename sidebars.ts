import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {type: 'category', label: 'Basics', items: [{type: 'autogenerated', dirName: 'basics'}]},
    {type: 'category', label: 'Python SDK', items: [{type: 'autogenerated', dirName: 'python-sdk'}, require("./docs/reference/sidebar.json")]},
    {type: 'category', label: 'Workbench', items: [{type: 'autogenerated', dirName: 'workbench'}]},
    {type: 'category', label: 'Hosted API', items: [{type: 'autogenerated', dirName: 'hosted-api'}]},
    {type: 'category', label: 'Knowledge Base', items: [{type: 'autogenerated', dirName: 'knowledge-base'}]},
  ],
};

export default sidebars;
