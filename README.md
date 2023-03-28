# ruanyf-weekly

<p align="left">
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg"></a>
<a href="https://github.com/plantree/ruanyf-weekly/actions/workflows/weekly-deploy.yml"><img src="https://github.com/plantree/ruanyf-weekly/actions/workflows/weekly-deploy.yml/badge.svg"></a>
</p>

> 声明: 非官方！！！官网链接在https://www.ruanyifeng.com/blog/

网站地址在：https://ruanyf-weekly.plantree.me/

#### 一. 背景

个人平时比较喜欢看阮一峰老师的技术周刊，文笔简练，条理清晰。

但也遇到了一些问题：

- 缺少一个跨端且友好的统一阅读入口

- 检索能力较欠缺

#### 二. 构建

因为阮一峰老师的技术周刊本身是开源的，因此可基于这些内容，利用现成的工具，重新构建一个静态网站，并借助CI实现部署自动化，同时对文本增加检索能力。

- 页面构建采用了VitePress

- 网站部署在Vercel

- 定时构建采用了GitHub Action

- 搜索引擎使用Algolia

#### 三. 本地启动

- 安装依赖：`npm i`

- 爬取周刊：`./script/main.sh`

- 启动：`npm run docs:dev`


### 四. Vercel部署

- [![Deploy to Vercel](https://img.shields.io/badge/Deploy-to_Vercel-blue?style=flat-square&logo=vercel)](https://vercel.com/import/git?s=https://github.com/plantree/ruanyf-weekly)

#### Changelog

##### Todo

###### Features

- 图片格式从webp转为通用格式

##### 2023.03.27

###### Bug Fixes

- 定期更新时间改为周五
- Giscus适配dark-mode
- Giscus跟随路由跳转而更新

###### Features

- NavBar增加周报title

##### 2023.03.23

###### Features

- VitePress构建静态页面，并部署到Vercel
- 接入Algolia
- GitHub Action周级构建
- 接入Giscus，增加评论

#### 参考

1. https://www.ruanyifeng.com/blog/
1. https://giscus.app/zh-CN

