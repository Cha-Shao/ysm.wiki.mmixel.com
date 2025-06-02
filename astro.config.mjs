// @ts-check
import { defineConfig, passthroughImageService } from "astro/config"
import starlight from "@astrojs/starlight"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
    // image: {
    //     service: passthroughImageService()
    // },
    adapter: vercel({
        imageService: true
    }),
    integrations: [
        starlight({
            title: {
                "zh-CN": "是，史蒂夫模型文档",
                en: "Yes Steve Model Wiki",
            },
            social: [{
                icon: "github",
                label: "GitHub",
                href: "https://github.com/withastro/starlight"
            }],
            defaultLocale: "root",
            locales: {
                root: {
                    label: "简体中文",
                    lang: "zh-CN",
                },
                'zh-ai': {
                    label: "AI 中文",
                    lang: "zh-AI",
                }
            },
            sidebar: [
                {
                    label: "简介",
                    slug: "intro"
                },
                {
                    label: "新手入门",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "安装使用", slug: "getting-start/install" },
                        { label: "常见问题解答", slug: "getting-start/faq" },
                        { label: "模型格式说明", slug: "getting-start/format" },
                        { label: "配置文件说明", slug: "getting-start/config" },
                        { label: "相关指令", slug: "getting-start/commands" },
                        { label: "Freesia 插件", slug: "getting-start/freesia-plugin" },
                    ],
                },
                {
                    label: "模型制作",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "准备工具", slug: "modeling/prepare" },
                        { label: "使用插件制作", slug: "modeling/blockbench-plugin" },
                        { label: "视频教程", slug: "modeling/video-tutorial" },
                        { label: "项目结构", slug: "modeling/struct" },
                        { label: "模型制作", slug: "modeling/model" },
                        { label: "纹理制作", slug: "modeling/texture" },
                        { label: "PBR贴图", slug: "modeling/pbr-texture" },
                        { label: "音频播放", slug: "modeling/sound" },
                        { label: "自定义轮盘", slug: "modeling/wheel" },
                        { label: "动画控制器", slug: "modeling/controller" },
                    ],
                },
                {
                    label: "动画制作",
                    items: [
                        { label: "动画概述", slug: "animation/intro" },
                        { label: "玩家主动画", slug: "animation/main" },
                        { label: "手部条件动画", slug: "animation/arm" },
                        { label: "并行动画", slug: "animation/parallel" },
                        { label: "护甲动画", slug: "animation/armor" },
                        { label: "骑乘动画", slug: "animation/ride" },
                        { label: "轮盘动画", slug: "animation/emote" },
                        { label: "箭矢动画", slug: "animation/arrow" },
                        { label: "选择界面动画", slug: "animation/gui" },
                        { label: "永恒枪械工坊动画", slug: "animation/tacz" },
                        { label: "马术动画", slug: "animation/swem" },
                        { label: "跑酷动画", slug: "animation/parcool" },
                        { label: "CarryOn动画", slug: "animation/carry-on" },
                        { label: "拔刀剑动画", slug: "animation/slashblade" },
                        { label: "女仆动画", slug: "animation/tlm" },
                        { label: "更真实的第一人称", slug: "animation/first-person" },
                    ]
                },
                {
                    label: "molang",
                    items: [
                        { label: "Molang概述", slug: "molang/intro" },
                        { label: "变量", slug: "molang/var" },
                        { label: "常用 molang 集合", slug: "molang/common" },
                        { label: "molang 参考表", slug: "molang/ref" },
                    ]
                },
                {
                    label: "模型转换",
                    items: [
                        { label: "中国版YSM组件", slug: "trans/netease" },
                        { label: "女仆模组", slug: "trans/maid" },
                    ]
                },
                // {
                //     label: "Reference",
                //     autogenerate: { directory: "reference" },
                // },
            ],
            customCss: [
                "./src/global.css",
            ],
            components: {

            },
        }),
        react()
    ],

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve("./src"),
            },
        }
    },
})