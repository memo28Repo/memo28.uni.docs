---
outline: deep
---

# memo28.cmd/dynamicallyGeneratePages

## 前置条件

- 了解 `glob` 语法

## 项目灵感及解决的问题

- 每次在`uniapp`中新增页面时都需要同步到`pages.json`中 且个人认为`pages.json`配置及其难用 维护路径繁琐


:::info

你只需要维护同级的 [**`dycPage.config.ts`**](/dynamicallyGeneratePages/pageConfig.md) 文件即可

:::


- 默认选项不显示对于不熟悉配置的新人来说非常不友好

:::info
显示的默认配置

```json
{
  "pages": {
    "style": {
      "app-plus": {},
      "h5": {}
    }
  }
}
```

:::

- 缺少根据环境配置的路由表 (env)

::: info

配置路由表 [详情见](/dynamicallyGeneratePages/pageConfig.md)

```ts
import {definePageConfig, getMode} from '@memo28.cmd/dynamically-generate-pages'

console.log(getMode()) // test

export default definePageConfig({
    pages: {
        style: {
            // 根据环境 设置页面标题
            navigationBarTitleText: getMode() === 'test' ? '首页:test' : '首页',
            h5: {}
        }
    }
})
```

:::

- `uniapp` 自带的跳转函数传递路由并没有很好的智能提示

```ts
uni.navigateTo({
    url: '/pages/' // 每次配置路由参数都需要去pages.json中复制路由 及其麻烦且效率低
})
```

::: info
该项目会为您自动生成路由 使用方式如下

```ts
//  跳转到首页
home.trigger()
```

:::

## 安装

```shell
npm i @memo28.cmd/dynamically-generate-pages
```

```shell
yarn add @memo28.cmd/dynamically-generate-pages
```

```shell
pnpm add @memo28.cmd/dynamically-generate-pages
```

