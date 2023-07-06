import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  ignoreDeadLinks: true, 
  title: 'ruanyf-weekly',
  description: '阮一峰的技术周刊',
  lastUpdated: true,
  cleanUrls: true,
  lang: 'zh-CN',
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/favicon.png"}],
    ['script', { src: '/_vercel/insights/script.js', defer: '' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '阮一峰的技术周刊 | 小站' }],
    ['meta', { property: 'og:description', content: '科技, 分享, 开源' }],
    ['meta', { property: 'og:image', content: 'https://ruanyf-weekly.plantree.me/thumbnail.jpg' }],
    ['meta', { property: 'og:url', content: 'https://ruanyf-weekly.plantree.me/' }],
  ],
  markdown: {
    headers: {
      level: [0, 1]
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
      },
      {
        text: '免费午餐捐赠',
        link: 'http://www.mianfeiwucan.org/donate/donate1/'
      },
      {
        text: '移动端阅读',
        link: '/qrcode.png'
      }
    ],
    sidebar: {
      '/weekly/': sidebarWeekly(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/plantree/ruanyf-weekly' },
      { icon: 'discord', link: 'https://discord.gg/ffRG4mWzFZ' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Plantree'
    },
    algolia: {
      appId: 'JMQN3OHTS2',
      apiKey: '9bb35b7fbb4b3ae36bb0f2ac9af77b5e',
      indexName: 'ruanyf-weekly'
    },
  },
});

function _convertParseWeeklyReadme() {
    const content = fs.readFileSync('./scripts/weekly.json', 'utf8').toString()
    const tree = JSON.parse(content)
    const config = [];
    for (let year in tree) {
        const monthItems = [];
        for (let month in tree[year]) {
            const items = [];
            for (let issue of tree[year][month]) {
                items.push({
                    text: issue[1].split('-')[1] + '期 | ' + issue[0],
                    link: `/weekly/${issue[1]}`
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