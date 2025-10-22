export default {
    lang: 'tr-TR',
    title: 'Orium Games',
    description: 'Orium Games için Yardım Masası sayfası',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon_00.png' }],
    ],
    cleanUrls: true,
    themeConfig: {
        sidebar: [
        {
        text: 'Diğer',
        items: [
            { text: 'Sıkça Sorulan Sorular', link: '/faq' },
        ]
        },
        ],
        logo: {
            dark: 'orium_nobg.png',
            light: 'orium_nobg.png'
        },
        siteTitle: false,
        editLink: {
            pattern: 'https://github.com/oriumgames/helpdesk/edit/master/docs/:path'
        },
        search: {
            provider: 'local'
        },
        footer: {
            copyright: '© 2025 Yardım Masası | <a href="https://orium.games">Orium Games</a>'
        },
        nav: [
            {
                text: 'Anasayfa',
                link: 'https://orium.games',
            },
            {
                text: 'Mağaza',
                link: 'https://magaza.orium.games',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/muKYnhaq',
            },
            {
                text: 'İletişim',
                link: '',
            }
        ]
        
    }
}
