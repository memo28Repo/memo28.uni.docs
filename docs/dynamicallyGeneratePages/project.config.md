---
outline: deep
---


# 项目配置




## 配置文件

> 在根目录新增 `dyc.config.ts` 项目配置文件

```shell
touch dyc.config.ts
```

内容如下

```ts
import {defineConfig} from '@memo28.cmd/dynamically-generate-pages';

export default defineConfig({
    // 主包规则 告诉我你的主包页面规则是如何定义的？
    // 例如: /pages/home/index.vue -> 首页
    mainPackageRules: ["./pages/**/*.vue"],
    // 分包规则 告诉我你的分包页面规则是如何定义的？
    // 例如：/pages_home/pages/home/idex.vue  ->  分包首页
    subPackagesRules: ["./page_*/**/**.vue"],
    // 告诉我你的 pages.json 页面路径在哪？
    rootPagesJsonPath: "./pages.json",
    // 当你的页面缺少 dycPage.config.ts 文件时是否自动创建补齐
    whetherMakeUpTheConfig: true,
    // 创建 dycPage.config 的文件后缀是什么？
    whetherMakeUpTheConfigFileSuffix: 'ts'

    // 为您生成声明式路由配置文件
    generateClaimsRoute:'./router/dycRouter.ts'
})
```

在你的 `package.json` 中 `script`块 配置

```json
{
  "dyc:test": "dynamically-generate-pages dev -m=test"
}
```

以上脚本的含义是: 执行脚本并以 `test` 环境启动

