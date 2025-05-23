// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
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
                        { label: 'Example Guide', slug: 'guides/example' },
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