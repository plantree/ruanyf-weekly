import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  title: 'ruanyf-weekly',
  description: '阮一峰的技术周刊',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  themeConfig: {
    nav: [
      {
        text: '阮一峰的网络日志',
        link: 'http://www.ruanyifeng.com/blog/',
      },
      {
        text: '技术周刊',
        link: 'https://github.com/ruanyf/weekly'
      }
    ],
    sidebar: {
      '/weekly/': sidebarWeekly(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/plantree/ruanyf-weekly' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Plantree'
    },
    algolia: {
      appId: '7BR8AJTG43',
      apiKey: '5c9d33a5daa33272d65b593f7ca77eed',
      indexName: 'ruanyf-weekly'
    },
  }
});

function _convertParseWeeklyReadme() {
    const content = fs.readFileSync('./scripts/tree.json', 'utf8').toString()
    const tree = JSON.parse(content)
    const config = [];
    for (let year in tree) {
        const monthItems = [];
        for (let month in tree[year]) {
            const items = [];
            for (let issue of tree[year][month]) {
                items.push({
                    text: issue.split('-')[1] + '期',
                    link: `/weekly/${issue}`
                });
            }
            monthItems.push({
                text: month,
                collapsed: true,
                items: items
            });
        }
        config.push({
            text: year,
            collapsed: true,
            items: monthItems
        });
    }
    config.reverse();
    config[0].collapsed = false;
    config[0].items[0].collapsed = false;
    return config
}

function sidebarWeekly() {
  return _convertParseWeeklyReadme();
}