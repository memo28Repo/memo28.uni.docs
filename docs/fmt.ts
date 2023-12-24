/*
 * @Author: @memo28.repo
 * @Date: 2023-12-23 23:08:14
 * @LastEditTime: 2023-12-23 23:09:51
 * @Description: 
 * @FilePath: /memo28.uni.docs/docs/fmt.ts
 */
const h = {
    "app-plus": {
        distribute: {
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