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
                'en-US': "Yes Steve Model Wiki",
            },
            social: [{
                icon: "github",
                label: "GitHub",
                href: "https://github.com/Cha-Shao/ysm.wiki.mmixel.com"
            }],
            defaultLocale: "root",
            locales: {
                root: {
                    label: "简体中文",
                    lang: "zh-CN",
                },
                'en-us': {
                    label: "English",
                    lang: "en-US",
                }
            },
            sidebar: [
                {
                    label: "简介",
                    translations: { 'en-US': "Introduction", },
                    slug: "intro"
                },
                {
                    label: "新手入门",
                    translations: { 'en-US': "Getting Started", },
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "安装使用",
                            translations: { 'en-US': "Installation", },
                            slug: "getting-start/install"
                        },
                        {
                            label: "常见问题解答",
                            translations: { 'en-US': "FAQ", },
                            slug: "getting-start/faq"
                        },
                        {
                            label: "模型格式说明",
                            translations: { 'en-US': "Model Format", },
                            slug: "getting-start/format"
                        },
                        {
                            label: "配置文件说明",
                            translations: { 'en-US': "Configuration", },
                            slug: "getting-start/config"
                        },
                        {
                            label: "相关指令",
                            translations: { 'en-US': "Commands", },
                            slug: "getting-start/commands"
                        },
                        {
                            label: "Freesia 插件",
                            translations: { 'en-US': "Freesia Plugin", },
                            slug: "getting-start/freesia-plugin"
                        },
                    ],
                },
                {
                    label: "模型制作",
                    translations: { 'en-US': "Modeling", },
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "准备工具",
                            translations: { 'en-US': "Preparing Tools", },
                            slug: "modeling/prepare"
                        },
                        {
                            label: "使用插件制作",
                            translations: { 'en-US': "Using Blockbench Plugin", },
                            slug: "modeling/blockbench-plugin"
                        },
                        {
                            label: "视频教程",
                            translations: { 'en-US': "Video Tutorial", },
                            slug: "modeling/video-tutorial"
                        },
                        {
                            label: "项目结构",
                            translations: { 'en-US': "Project Structure", },
                            slug: "modeling/struct"
                        },
                        {
                            label: "模型制作",
                            translations: { 'en-US': "Model Creation", },
                            slug: "modeling/model"
                        },
                        {
                            label: "纹理制作",
                            translations: { 'en-US': "Texture Creation", },
                            slug: "modeling/texture"
                        },
                        {
                            label: "YSM 模型 UV 规范",
                            translations: { 'en-US': "YSM Model UV Standard", },
                            slug: "modeling/uv-standard"
                        },
                        {
                            label: "多语言支持",
                            translations: { 'en-US': "Localization", },
                            slug: "modeling/localization"
                        },
                        {
                            label: "PBR贴图",
                            translations: { 'en-US': "PBR Texture", },
                            slug: "modeling/pbr-texture"
                        },
                        {
                            label: "音频播放",
                            translations: { 'en-US': "Sound Playback", },
                            slug: "modeling/sound"
                        },
                        {
                            label: "自定义轮盘",
                            translations: { 'en-US': "Custom Wheel", },
                            slug: "modeling/wheel"
                        },
                        {
                            label: "动画控制器",
                            translations: { 'en-US': "Animation Controller", },
                            slug: "modeling/controller"
                        },
                        {
                            label: "前景图与背景图",
                            translations: { 'en-US': "Foreground and Background Images", },
                            slug: "modeling/cover-background"
                        },
                        {
                            label: "模型打包",
                            translations: { 'en-US': "Packaging Models", },
                            slug: "modeling/packaging"
                        },
                    ],
                },
                {
                    label: "动画制作",
                    translations: { 'en-US': "Animation", },
                    items: [
                        {
                            label: "动画概述",
                            translations: { 'en-US': "Animation Overview", },
                            slug: "animation/intro"
                        },
                        {
                            label: "玩家主动画",
                            translations: { 'en-US': "Player Main Animation", },
                            slug: "animation/main"
                        },
                        {
                            label: "手部条件动画",
                            translations: { 'en-US': "Hand Conditional Animation", },
                            slug: "animation/arm"
                        },
                        {
                            label: "并行动画",
                            translations: { 'en-US': "Parallel Animation", },
                            slug: "animation/parallel"
                        },
                        {
                            label: "护甲动画",
                            translations: { 'en-US': "Armor Animation", },
                            slug: "animation/armor"
                        },
                        {
                            label: "骑乘动画",
                            translations: { 'en-US': "Ride Animation", },
                            slug: "animation/ride"
                        },
                        {
                            label: "轮盘动画",
                            translations: { 'en-US': "Wheel Animation", },
                            slug: "animation/emote"
                        },
                        {
                            label: "箭矢动画",
                            translations: { 'en-US': "Arrow Animation", },
                            slug: "animation/arrow"
                        },
                        {
                            label: "选择界面动画",
                            translations: { 'en-US': "GUI Animation", },
                            slug: "animation/gui"
                        },
                        {
                            label: "永恒枪械工坊动画",
                            translations: { 'en-US': "Eternal Gunworks Animation", },
                            slug: "animation/tacz"
                        },
                        {
                            label: "枪械动画",
                            translations: { 'en-US': "Gun Animations", },
                            slug: "animation/gun"
                        },
                        {
                            label: "马术动画",
                            translations: { 'en-US': "Equestrian Animation", },
                            slug: "animation/swem"
                        },
                        {
                            label: "跑酷动画",
                            translations: { 'en-US': "Parkour Animation", },
                            slug: "animation/parcool"
                        },
                        {
                            label: "CarryOn动画",
                            translations: { 'en-US': "CarryOn Animation", },
                            slug: "animation/carry-on"
                        },
                        {
                            label: "拔刀剑动画",
                            translations: { 'en-US': "SlashBlade Animation", },
                            slug: "animation/slashblade"
                        },
                        {
                            label: "女仆动画",
                            translations: { 'en-US': "TLM Maid Animation", },
                            slug: "animation/tlm"
                        },
                        {
                            label: "骑乘实体动画",
                            translations: { 'en-US': "Ridden Entity Animations", },
                            slug: "animation/ride-entity"
                        },
                        {
                            label: "铁魔法动画",
                            translations: { 'en-US': "Iron's Spells Animation", },
                            slug: "animation/iron-spells"
                        },
                        {
                            label: "沉浸式奏乐动画",
                            translations: { 'en-US': "Immersive Melodies Animation", },
                            slug: "animation/immersive-melodies"
                        },
                        {
                            label: "更好的战斗动画",
                            translations: { 'en-US': "Better Combat Animation", },
                            slug: "animation/better-combat"
                        },
                        {
                            label: "更真实的第一人称",
                            translations: { 'en-US': "More Realistic First Person", },
                            slug: "animation/first-person"
                        },
                    ]
                },
                {
                    label: "molang",
                    translations: { 'en-US': "Molang", },
                    items: [
                        {
                            label: "Molang概述",
                            translations: { 'en-US': "Molang Overview", },
                            slug: "molang/intro"
                        },
                        {
                            label: "变量",
                            translations: { 'en-US': "Variables", },
                            slug: "molang/var"
                        },
                        {
                            label: "常用 molang 集合",
                            translations: { 'en-US': "Common Molang Collections", },
                            slug: "molang/common"
                        },
                        {
                            label: "molang 参考表",
                            translations: { 'en-US': "Molang Reference", },
                            slug: "molang/ref"
                        },
                        {
                            label: "Molang 杂项内容",
                            translations: { 'en-US': "Molang Miscellaneous", },
                            slug: "molang/misc"
                        },
                        {
                            label: "自定义函数",
                            translations: { 'en-US': "Custom Functions", },
                            slug: "molang/custom-functions"
                        },
                    ]
                },
                {
                    label: "更新日志",
                    translations: { 'en-US': "Changelog", },
                    items: ["2.6.5", "2.6.4", "2.6.3", "2.6.2", "2.6.1", "2.6.0", "2.5.3", "2.5.2", "2.5.1", "2.5.0", "2.4.1", "2.4.0", "2.3.2", "2.3.1", "2.3.0", "2.2.2", "2.2.1", "1.2.0"].map((version) => ({
                        label: `${version} 更新日志`,
                        translations: { 'en-US': `${version} Update Log`, },
                        slug: `changelog/${version}`,
                    })),
                },
                {
                    label: "模型转换",
                    translations: { 'en-US': "Model Conversion", },
                    items: [
                        {
                            label: "中国版YSM组件",
                            translations: { 'en-US': "Chinese YSM Components", },
                            slug: "trans/netease"
                        },
                        {
                            label: "女仆模组",
                            translations: { 'en-US': "TLM Maid Mod", },
                            slug: "trans/maid"
                        },
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
