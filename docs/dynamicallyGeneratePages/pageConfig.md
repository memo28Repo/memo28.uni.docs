---
outline: deep
---

# 配置页面


在你的页面同级创建 `dycPage.config.ts` 文件 

::: warning

 注意不是 `dyc.config.ts` 文件 `dyc.config.ts` 文件用来定义整个项目规则

:::

```shell
touch dyc.config.ts
```



执行脚本


```json
{
  "dyc:test": "dynamically-generate-pages dev -m=test"
}
```


```ts
import { definePageConfig , getMode } from '@memo28.cmd/dynamically-generate-pages'

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

该配置会帮你自动在 `pages.json` 中生成页面配置路由

