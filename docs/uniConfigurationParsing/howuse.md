---
outline: deep
---



## `UniConfigurationParsingOptions`


```ts
import {UniConfigurationParsingOptions} from '@memo28.cmd/uni-configuration-parsing';
```

配置对象的声明类型


```ts

const h: UniConfigurationParsingOptions = {
    name: '',
    appid: '',
    versionCode: 100,
    "app-plus": {
        modules: {}
    }
}

```


## `ParsingConfiguration`

```ts

import { UniConfigurationParsingOptions, ParsingConfiguration} from '@memo28.cmd/uni-configuration-parsing';

```


解析器

用于解析传递的配置和做一些配置的初始化工作


```ts

import {ParsingConfiguration, UniConfigurationParsingOptions} from '@memo28.cmd/uni-configuration-parsing';

const h: UniConfigurationParsingOptions = {
    name: '',
    appid: '',
    versionCode: 100,
    "app-plus": {
        modules: {}
    }
}


const finalConfig = new ParsingConfiguration(h)
    /**
     * addAndroidPermissions 方法参数为配置对象
     *
     *  配置对象用于配置 APP 所有模块配置
     *
     */
    .addAndroidPermissions((config) => {
        // 当前正在配置百度地图
        config.androidPermissionsConfigMap.addBaiduMap({
            appkey_android: 'and',
            appkey_ios: 'ios'
        })
        //  配置结束需要以 done 作为结尾
        // done 会返回最终的所有参数配置
    }).done()

export default finalConfig

```


###  `ParsingConfiguration.addAndroidPermissions` 可配置的对象内容


#### 配置统计

```ts
config.addStatic() 
```

#### 配置短信彩信

```ts
config.addMessage() 
```


#### 配置摇一摇

```ts
config.addIBeacon()
```


#### 配置实人认证

```ts
config.addFacialRecognitionVerify()
```


#### 指纹识别

```ts
config.addFingerprint()
```


#### 配置录音模块

```ts
config.addRecord()
```


#### 配置云端一体安全网络

```ts
config.addSecureNetwork()
```


#### 配置SQLite

```ts
config.addSQLite()
```

#### 配置视频播放

```ts
config.addVideoPlayer()
```

#### 配置ios webview

```ts
config.addUIWebview()
```

#### 配置腾讯TBS

```ts
config.addWebviewX5()
```


#### 配置通讯录

```ts
config.addContact()
```

#### 配置低功耗蓝牙

```ts
config.addBluetooth()
```


#### 配置地图


````ts
config.androidPermissionsConfigMap
````


#### 配置登陆

```ts
config.androidPermissionsConfigOauth
```


#### 配置支付

```ts
config.androidPermissionsConfigPay
```


#### 配置分享

```ts
config.androidPermissionsConfigShare
```


#### 配置语音输入

```ts
config.androidPermissionsConfigSpeech
```


#### 配置定位

```ts
config.androidPermissionsConfigPositioning
```






