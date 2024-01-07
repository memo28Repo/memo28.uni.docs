---
outline: deep
---

# 路由


## `SimpleRouteJump`

对路由跳转的封装

- 跳转前拦截

- 跳转参数转换，不再拼接字符串

- 只定义一次路径，避免多次定义失误或忘记路径翻找配置文件的情况


简单使用

```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

new SimpleRouteJump().setMethod('navigateBack').trigger({}) // 返回

const home = new SimpleRouteJump('home');

home.trigger({}) // 跳转去home页面
```


### 传参


```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

const home = new SimpleRouteJump('home');

// 跳转去home页面 并携带参数

home.trigger({
    mete: {
        a: 1,
        b: 2
    }
}) 

// /home?a=1&b=2
```


###  是否在当前页面


```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

const home = new SimpleRouteJump('home');

home.isCurRoute()// 如果在home页面则会返回 true
```


### 获取`url`


```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

const home = new SimpleRouteJump('home');

home.getURL() // home
```


### 跳转拦截


```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

const home = new SimpleRouteJump('home').setPreJumpInterceptor(()=>{
    // 只有返回 true 才可正常跳转
    // return true
    // 如果你返回的是一个对象 则会将信息打印出来
    return {
        msg: '有误'
    }
});
```


### 设置`URL`

```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

const home = new SimpleRouteJump().setURL('url');

```


### 设置跳转方法

默认 `navigateTo`

可选

- `navigateTo`

- `redirectTo`

- `switchTab`

- `reLaunch`

- `navigateBack`


```ts
import {SimpleRouteJump} from '@memo28.uni/utils'

const home = new SimpleRouteJump().setMethod('');
```
