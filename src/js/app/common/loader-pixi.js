// createjs loader加载

define([
    'jquery',
    'pixi',
    'utils/spriteplayer',
    'source',
    'text!../components/common/loader.html!strip',
    'jquery.browser',
    'jquery.color',
    'jquery.hammer',
    'helper/lakers',
    'utils/sword'],
($, PIXI, spriteplayer, source, htmlLoader) => {
    const world = myWorld;
    const laker = {};

    let callback = null;

    // 挂载
    laker.mount = function(cb) {
        callback = cb;
        // 如果小于ie9，则取消loading（createjs不支持）;
        if ($.browser.msie && $.browser.version < 9) {
            return cb();
        }

        this.preload();
    };

    // loader自己内容的预加载
    laker.preload = function() {
        const loader = new PIXI.loaders.Loader('assets/img/');

        for (const item of source.preload) {
            loader.add(item.src);
        }

        loader.load(() => {
            world.root.append(htmlLoader);
            this.$root = world.root.find('.sys-loader');

            this.mainload();
        });
    };

    // 项目资源的预加载
    laker.mainload = function() {
        const loader = new PIXI.loaders.Loader('assets/img/');

        for (const item of source.mainload) {
            loader.add(item.src);
        }

        let i = 0;
        let timer = setInterval(() => {
            this.$root.find('.progress').css('width', ++i + '%');
            this.$root.find('.bar .text span').text(`${i}%`);
            if (i === 100) {
                clearInterval(timer);
                setTimeout(() => this.movie(), 1000);
            }
        }, 10);

        // this.$root.find('.progress').animate({ width: '100%' }, 2000, () => {
        //     console.log(111222);
        // });

        loader.load((loader, resources) => {
            console.log('加载完成');
            console.log(callback());

            // this.$root.find('.container').fadeOut(() => anim.destroy());

            // const time = 500;
            // this.$root.find('.cut-line').delay(500).animate({'left': '0%', 'opacity': 0}, 1200, 'easeInOutExpo', () => {
            //     this.$root.find('.top').delay(time).animate({'top': '-40%'}, 1500, 'easeInOutExpo');
            //     this.$root.find('.bottom').delay(time).animate({'bottom': '-40%'}, 1500, 'easeInOutExpo', () => {
            //         this.destroy();
            //     });
            // });
        });

        loader.onProgress.add(loader => {
            // laker.$root.find('span').text(parseInt(loader.progress + 0.5) + '%');
            // laker.$root.find('.progress div').css('width', parseInt(loader.progress + 0.5) + '%');
        });
    };

    laker.movie = function() {
        const time = 500;

        this.$root.find('.info, .bar, .explain').fadeOut(() => {
            this.$root.find('.top, .bottom').animate({'backgroundColor': '#000', 'borderColor': '#000'});
            this.$root.find('.main').fadeIn(1500);
        });

        $('body').hammer().on('tap', () => {
            world.lakers.$video.play();
            world.lakers.$video.pause();
            this.$root.find('.main').fadeOut(() => {
                this.$root.find('.cut-line').delay(0).animate({'left': '0%', 'opacity': 0}, 1200, 'easeInOutExpo', () => {
                    this.$root.find('.top').delay(time).animate({'top': '-40%'}, 1500, 'easeInOutExpo');
                    this.$root.find('.bottom').delay(time).animate({'bottom': '-40%'}, 1500, 'easeInOutExpo', () => {
                        $('body').animate({'backgroundColor': '#000'}, 1000, () => {
                            this.destroy();
                            world.lakers.$video.show();
                            world.lakers.$video.play();
                        });
                    });
                });
            });
        });
    };

    // 销毁
    laker.destroy = function() {
        this.$root.remove();
        this.$root = null;
    };

    world.lakers.$loader = laker;
    return laker;
});
