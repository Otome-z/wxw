module.exports = {
    filenameHashing: false,
    // publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://apiwiki.wxwerp.com:30020/mock/17',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
                router: {
                    '/erp/publish': 'http://localhost:11688/api',
                },
            },
            '/images': {
                target: 'http://localhost:11688',
            },
            '/mp3': {
                target: 'http://localhost:11688',
            },
            '/font': {
                target: 'http://localhost:11688',
            },
            '/css': {
                target: 'http://localhost:11688',
            },
            '/js': {
                target: 'http://localhost:11688',
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                assets: '@/assets',
                components: '@/components',
                site: '@/site',
                css: '@/css',
                img: '@/img',
                $: 'jquery',
            },
        },
    },
};
