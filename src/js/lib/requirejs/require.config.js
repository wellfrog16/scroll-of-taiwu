﻿require.config({
    // optimize: 'none',
    baseUrl: 'js',

    buildCSS: false,
    inlineText: true,

    paths: {
        '@': 'app', // 废弃，这个加载方式会导致text!加载路径错误

        // requirejs
        // ------------------------------------
        'text': 'lib/requirejs/text',
        // 'i18n': 'lib/requirejs/i18n',

        // createjs
        // ------------------------------------
        'createjs-base': 'lib/createjs/createjs-2015.11.26.min',
        'preloadjs-base': 'lib/createjs/preloadjs.min',

        // 修改createjs来决定加载createjs的什么模块
        'createjs': 'lib/createjs/createjs',

        // pixi
        'pixi': 'lib/pixi/pixi.min',

        // jquery
        // ------------------------------------
        'jquery': 'lib/jquery/jquery-3.3.1.min',
        // 'jquery': 'lib/jquery/jquery-3.3.1.slim.min',
        // 'jquery': 'lib/jquery/jquery-1.12.4.min',
        // 'jquery.cookie': 'lib/jquery/jquery.cookie',
        'jquery.color': 'lib/jquery/jquery.color',
        'jquery.browser': 'lib/jquery/jquery.browser',
        'jquery.hammer': 'lib/jquery/jquery.hammer',
        'hammer': 'lib/jquery/hammer.min',
        // 'jquery.fullPage': 'lib/jquery/jquery.fullPage',
        
        // 'jquery.scrollTo': 'lib/jquery/jquery.scrollTo',

        // 'swiper': 'lib/swiper/swiper-3.4.2.jquery.min',

        // 'bootstrap': 'lib/bootstrap/bootstrap-3.3.7.min',

        // // 轮播
        // 'slick': 'lib/slick/slick',

        // // 滚动条
        // 'iscroll': 'lib/iscroll/iscroll-5.2.0',

        // helper
        // 'utils': 'utils/helper',
        // 'frameplayer': 'lib/helper-es5/frameplayer',
        // 'spriteplayer': 'lib/utils/spriteplayer',

        // app
        // ------------------------------------
        // js直接引用成app/xxx 会导致text!xxx.html加载路径错误
        // 'lakers': 'helper/lakers',
        // 'rivers': 'helper/rivers',

        'block': 'app/common/block',
        'music': 'app/common/music',
        // 'loader': 'app/common/loader-createjs',
        'loader': 'app/common/loader-pixi',
        'video': 'app/common/video',

        'source' : 'app/source',
        'index' : 'app/usr/index',

        'script': 'app/script',
    },

    shim: {
        // 'bootstrap': ['jquery'],
        // // 'bootstrap' : ['css!./lib/bootstrap/bootstrap-3.3.7.min.css'],
        // 'swiper': ['jquery', 'css!./lib/swiper/swiper-3.4.2.min.css'],
        // 'jquery.fullPage': ['jquery', 'css!./lib/jquery/jquery.fullPage.css'],
        // 'jquery.hammer': ['hammer']
        // test: {
        //     exports: 'StringUtils'
        // }
    },

    // shim : {
    //    'moduleName' : {
    //        deps: ['jquery'],
    //        exports : '模块的全局变量',
    //        init: function(QQ) {
    //            return QQ;
    //        }
    //    },

    //    'bootstrap': ['jquery'],

    //    'modernizr': {
    //        exports: 'Modernizr'
    //    }
    // },

    waitSeconds: 30,
    urlArgs: '_=' + new Date().getTime()
});
