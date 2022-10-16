module.exports = {
    title: "My blog", // Website title
    description: 'my vitepress Blog.', //Website description
    base: '/', //  The default path during deployment / secondary address / base can be used/
    // Lang: 'en US', / / language
    // Page header configuration, icon, css, js
    head: [
        // Change the icon of the title
        [
            'link',
            {
                rel: 'icon',
                href: '/images/muathye.svg', //The pictures are placed in the public folder
            },
        ],
    ],
    // Theme configuration
    themeConfig: {
        // repo: 'vuejs/vitepress', // Your github warehouse address will jump in the upper right corner of the page
        //   Head navigation
        nav: [
            { text: 'home page', link: '/' },
            { text: 'about', link: '/about/' },
        ],
        //   Side navigation
        sidebar: [
            { text: 'my', link: '/mine/' }
        ]
    }
}