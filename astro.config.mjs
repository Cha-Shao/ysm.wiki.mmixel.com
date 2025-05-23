// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    image: {
        service: passthroughImageService()
    },
    integrations: [
        starlight({
            title: {
                'zh-CN': "是，史蒂夫模型文档",
                en: "Yes Steve Model Wiki",
            },
            social: [{
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/withastro/starlight'
            }],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                }
            },
            sidebar: [
                {
                    label: "简介",
                    slug: "intro"
                },
                {
                    label: '新手入门',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: '安装使用', slug: 'getting-start/install' },
                        { label: '常见问题解答', slug: 'getting-start/faq' },
                        { label: '模型格式说明', slug: 'getting-start/format' },
                        { label: '配置文件说明', slug: 'getting-start/config' },
                        { label: '相关指令', slug: 'getting-start/commands' },
                        { label: 'Freesia 插件', slug: 'getting-start/freesia-plugin' },
                    ],
                },
                {
                    label: '模型制作',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: '准备工具', slug: 'modeling/prepare' },
                        { label: '使用插件制作', slug: 'modeling/blockbench-plugin' },
                        { label: '视频教程', slug: 'modeling/video-tutorial' },
                        { label: '项目结构', slug: 'modeling/struct' },
                        { label: '模型制作', slug: 'modeling/model' },
                        { label: '纹理制作', slug: 'modeling/texture' },
                        { label: 'PBR贴图', slug: 'modeling/pbr-texture' },
                        { label: '音频播放', slug: 'modeling/sound' },
                        { label: '自定义轮盘', slug: 'modeling/wheel' },
                        { label: '动画控制器', slug: 'modeling/controller' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
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
                '@': path.resolve('./src'),
            },
        }
    },
});