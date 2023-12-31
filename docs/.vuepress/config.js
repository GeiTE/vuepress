module.exports = {
    title: 'GeiTE',
    description: 'GeiTE, GeiTE的博客网站, 记录学习过程, HTML, CSS, JavaScript, Vue, React, Node.js, 设计, 摄影',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    port: 8666,
    smoothScroll: true,

    // 主题配置
    themeConfig: {
        // logo: '/images/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '设计', link: '/disign/'},
            { 
                text: '程序',
                link: '/programming/',
                items: [
                    {
                        text: 'vuepress快速构建个人博客',
                        link: '/programming/vuepress/',
                    },
                    { 
                        text: '前端开发',
                        link: '/programming/front-end-development/',
                    },
                ]
            },
            { text: '摄影', link: '/photo/'},
            { text: '关于', link: '/about' },
            { text: '时间线', link: '/timeline' },
            {
                text: '外链',
                ariaLable: '外链',
                items: [
                    { text:'GitHub', link: 'https://github.com/GeiTE' },
                    { text: 'Unsplash', link: 'https://unsplash.com/@geite' }
                ]
            }
        ],
        // sidebar: 'auto',
        // sidebar: {
        //     '/disign/': [
        //         ['/disign/', '设计'],
        //     ],
        //     '/programming/': [
        //         ['/programming/', '程序'],
        //         ['/programming/front-end-development', '前端开发'],
        //     ],
        //     '/photo/': [
        //         ['/photo/', '摄影'],
        //     ],
        //     '/': [
        //         '',
        //         'about',
        //         'timeline',
        //     ]
        // },
        sidebar: {
            '/disign/': [
                ['/disign/', '设计'],
            ],
            '/programming/': [
                ['/programming/', '程序'],
                // ['/programming/front-end-development', '前端开发'],
                // ['/programming/back-end-development', '后端开发'],
            ],
            '/programming/front-end-development/': [
                ['/programming/front-end-development/', '前端开发'],
            ],
            '/photo/': [
                ['/photo/', '摄影'],
            ],
            '/': [
                '',
                'about',
                'timeline',
            ],
        },
        displayAllHeaders: true,
        lastUpdated: '上次更新',
    }
}