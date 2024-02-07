---
outline: deep
---

# memo28.cmd/uniConfigurationParsing

用于解决项目中多套`manifest`配置 人工切换配置及其容易出错

通过强大的代码提示、类型检查，以及模块化配置，改善 manifest.json 文件的编写体验，提高开发效率。


## install

### npm

``` shell
npm i @memo28.cmd/uni-configuration-parsing
```

### yarn

``` shell
yarn add @memo28.cmd/uni-configuration-parsing
```

### pnpm

``` shell
pnpm add @memo28.cmd/uni-configuration-parsing
```

## 配置文件

终端执行

```shell
touch mut.config.ts
```

```shell
# 读取配置并且生成manifest.json脚本
npm pkg set script.mut:dev='uni-configuration-parsing dev'
```

```shell
# 以 test 模式下 执行脚本 并生成 manifest.json 文件
npm pkg set script.mut:mode='uni-configuration-parsing dev --m=test'
```

复制以下内容到 `mut.config.ts` 中

:::info
`mut.config.ts` 文件应该放在 `manifest.json` 同级
:::

```ts
import { ParsingConfiguration, UniConfigurationParsingOptions } from '@memo28.cmd/uni-configuration-parsing';

const h: UniConfigurationParsingOptions = {
    name: '',
    appid: '',
    versionCode: 1
}

const finalConfig = new ParsingConfiguration(h).addAndroidPermissions((config) => {

}).done()

export default finalConfig
```
