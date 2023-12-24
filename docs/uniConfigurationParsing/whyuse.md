---
outline: deep
---

# 我们做了哪些优化？

## 适当的默认值

### app

```ts
const h = {
    "app-plus": {
        distribute: {
            // app 最低兼容性配置
            android: {
                abiFilters: ['arm64-v8a', 'arm64-v8a', 'arm64-v8a'],
                minSdkVersion: 19,
                targetSdkVersion: 26,
            }
        },
        splashscreen: {
            delay: 0,
            alwaysShowBeforeRender: true,
            autoclose: true,
            waiting: true
        },
        nvueStyleCompiler: 'uni-app',
        compilerVersion: 3
    }
}
```

### weixin

```ts
const h =  {
    "mp-weixin":  {
        setting: {
            es6: true, // 默认开启 es6 转 es5
            postcss: true, // 上传时样式自动补全
            minified: true // 上传时自动压缩代码
        },
        usingComponents: true
    } 
} 
```

## version

将 `versionCode` 字段和 `versionName` 进行了互相转换 如

```ts{4}
const h = {
    versionCode: 100,
    // 我们会字段为你生成 versionName
    versionName: "1.0.0" // 该字段会生成到你的manifest.json 中,你不用填写
}
```

反之亦然

```ts{3}
const h = {
    versionName: "1.0.0" ,
    // versionCode: 100, 该字段会生成到你的manifest.json 中,你不用填写
}
```

## 语义化配置

配置的同时会自动生成对应的权限字符

```ts
import { ParsingConfiguration, UniConfigurationParsingOptions } from '@memo28.cmd/uni-configuration-parsing';

const h: UniConfigurationParsingOptions = {
    name: '',
    appid: '',
    versionCode: 1,
    versionName: '12'
}

const finalConfig = new ParsingConfiguration(h).addAndroidPermissions((config) => {
    // 配置百度地图
    config.androidPermissionsConfigMap.addBaiduMap({
        appkey_android: 'and',
        appkey_ios: 'ios'
    })
}).done()

```

会生成一下内容

```json{6,10,26}
{
  "name": "",
  "appid": "",
  "versionCode": 100,
  "app-plus": {
    "modules": { // 根据配置自动生成
      "Maps": {}
    },
    "distribute": {
      "sdkConfigs": { // 根据配置自动生成
        "maps": {
          "baidu": {
            "appkey_android": "and",
            "appkey_ios": "ios"
          }
        }
      },
      "android": {
        "abiFilters": [
          "arm64-v8a",
          "arm64-v8a",
          "arm64-v8a"
        ],
        "minSdkVersion": 19,
        "targetSdkVersion": 26,
        "permissions": [ // 根据配置自动生成 Map 相关权限
          "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
          "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
          "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
          "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
          "<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
          "<uses-permission android:name=\"android.permission.INTERNET\"/>",
          "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\" />",
          "<uses-permission android:name=\"android.permission.READ_LOGS\" />",
          "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
        ]
      }
    },
    "splashscreen": {
      "delay": 0,
      "alwaysShowBeforeRender": true,
      "autoclose": true,
      "waiting": true
    },
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3
  },
  "debug": false,
  "description": "",
  "versionName": "1.0.0",
  "transformPx": false,
  "uniStatistics": {
    "enable": true
  },
  "vueVersion": "3",
  "mp-alipay": {
    "usingComponents": true
  },
  "mp-baidu": {
    "usingComponents": true
  },
  "mp-toutiao": {
    "usingComponents": true
  },
  "mp-weixin": {
    "setting": {
      "es6": true,
      "postcss": true,
      "minified": true
    },
    "usingComponents": true
  }
}
```
