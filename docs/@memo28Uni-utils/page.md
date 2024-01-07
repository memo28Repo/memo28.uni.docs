---
outline: deep
---

# 页面

## `getCurrentParams` 

获取当前页面参数

```ts
import { getCurrentParams } from '@memo28.uni/utils'

const { id } = getCurrentParams<{ id: number }>()
```


## `getPrevPageInstance`

获取前n个页面实例

```ts
import { getPrevPageInstance } from '@memo28.uni/utils'

// 默认获取前一个
const prevPage = getPrevPageInstance()


// 获取前两个页面实例
const firstTwoPages = getPrevPageInstance(2)
```




## `getCurPage`


```ts
import { getCurPage } from '@memo28.uni/utils'


getCurPage() // 当前页面实例
```



## `addMethodToCurrentExample`


向当前页面实例上添加属性

通常用于其他页面调用该页面方法

```ts

addMethodToCurrentExample({
    add() {
        console.log('trigger')
    }
})
```



## `getCurRoutePage`


获取当前页面地址


```ts
import { getCurRoutePage } from '@memo28.uni/utils'

getCurRoutePage() // pages/home/index
```


