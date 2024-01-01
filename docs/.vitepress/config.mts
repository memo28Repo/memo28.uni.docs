/*
 * @Author: @memo28.repo
 * @Date: 2023-12-15 23:45:17
 * @LastEditTime: 2023-12-23 23:19:30
 * @Description:
 * @FilePath: /memo28.uni.docs/docs/.vitepress/config.mts
 */
import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "memo28.uni",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            // { text: 'Home', link: '/' },
            {
                text: '其他资源', items: [
                    {text: 'memo28.business', link: '/memo28.business'},
                    {text: 'memo28', link: '/memo28'},
                ]
            }
        ],

        sidebar: [
            // {
            //   text: 'exp',
            //   items: [
            //     { text: 'Markdown Examples', link: '/markdown-examples' },
            //     { text: 'Runtime API Examples', link: '/api-examples' }
            //   ]
            // },
            {
                text: 'uniConfigurationParsing',
                items: [
                    {text: '快速开始', link: '/uniConfigurationParsing/guide'},
                    {text: '为什么使用？', link: '/uniConfigurationParsing/whyuse'},
                    {text: '如何使用', link: '/uniConfigurationParsing/howuse'},
                ]
            },
            {
                text: 'dynamicallyGeneratePages',
                items: [
                    {
                        text: '快速开始',
                        link: '/dynamicallyGeneratePages/guide'
                    },
                    {
                        text: '配置页面',
                        link: '/dynamicallyGeneratePages/pageConfig'
                    },
                    {
                        text: '配置项目',
                        link: '/dynamicallyGeneratePages/project.config'
                    },
                ]
            },
            {
                text: '@memo28.uni/wifi',
                items: [
                    {text: '快速开始', link: '/@memo28.uni-wifi/guide'},
                    {text: '如何使用', link: '/@memo28.uni-wifi/howuse'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/memo28-space-cmd'}
        ]
    }
})
