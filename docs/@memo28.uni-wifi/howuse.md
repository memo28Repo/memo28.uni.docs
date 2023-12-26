---
outline: deep
---

# API Doc

::: info
h5端 不可用
:::

## initWifi

初始化 `wifi` 模块

```ts
import { initWifi } from '@memo28.uni/wifi'

initWifi()
```

::: warning
你所有与 `wifi` 相关的操作都需要在 `initWifi` 之后进行

但你不用担心忘记调用 `initWifi` 因为所有操作都会在内部自动判断了是否调用 `initWifi`  如没有则会自动调用
:::



## getMac

获取已链接的 `wifi` 的 `mac` 地址

```ts
import { getMac } from '@memo28.uni/wifi'

getMac().then(mac => {
    console.log(mac)
})
```


## compareMACAddress

比较传入的 `mac` 地址 与当前链接的mac地址是否相同

```ts
import { compareMACAddress } from '@memo28.uni/wifi'

compareMACAddress('00:00:00:00:00:00').then(result => {
    console.log(result)
})
```


## compareMACAddressGroup

比较传入的 `mac`组地址 与当前链接的mac地址是否相同

返回匹配上的 `mac` 地址组

```ts
import { compareMACAddressGroup } from '@memo28.uni/wifi'

compareMACAddressGroup(['00:00:00:00:00:00', '00:00:00:00:00:01']).then(result => {
    console.log(result)
})

```


::: tip
你需要知道的是 `compareMACAddressGroup`  和  `compareMACAddress`  在内部都将 `mac` 转为小写进行对比

这样你就不用担心 `mac` 地址的大小写敏感问题

:::





## defineConfig

定义 `wifi` 模块的配置

```ts
import {defineConfig} from '@memo28.uni/wifi'

defineConfig({
    debugger: true, //  会将所有信息都尽可能的打印出来
    // 监听网络状态 
    // 当 wifi 链接会调用 connectToWifi  方法 
    // wifi 断开会调用 unConnectToWifi 方法
    listenToNetworkStatus: true, 
    connectToWifi() {
        console.log('wifi connect')
    },
    unConnectToWifi() {
        console.log('wifi unConnect')
    },
    // 所有调用 wifi 错误时的回调方法. 你可以在这里自定义提示信息
    wifiFailToast(code , msg) {
    }
})
```
