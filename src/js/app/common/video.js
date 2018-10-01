define([
    'text!../components/common/video.html!strip',
    'jquery.hammer',
    'helper/lakers',
    'block'],
(htmlVideo) => {
    const world = myWorld;
    const laker = {};

    let button = null;
    let callback1 = null;
    // let callback2 = null;

    // 挂载
    laker.mount = function(btn, cb1, cb2) {
        if (!this.$root) {
            world.root.append(htmlVideo);
            this.$root = world.root.find('.sys-video');

            button = btn;
            callback1 = cb1;
            // callback2 = cb2;

            // 绑定事件
            handle();
        }
    };

    laker.show = () => {
        laker.$root.show();
    };

    laker.hide = () => {
        laker.$root.hide();
    };

    laker.play = function() {
        const video = laker.$root.find('video');
        video[0].play();
    };

    laker.pause = function() {
        const video = laker.$root.find('video');
        video[0].pause();
    };

    function handle() {
        const video = laker.$root.find('video');

        if (button) {
            button.hammer().on('tap', () => {
                world.sword.tryFun(callback1);
                laker.show();
                world.lakers.$block && world.lakers.$block.index(-1);
                video[0].play();
            });
        }

        // video.on('timeupdate', () => {
        //     // 视频结束前1秒执行
        //     if (video[0].duration > 0 && video[0].currentTime > video[0].duration - 1) {
        //         video[0].pause();
        //         world.sword.tryFun(callback2);
        //     }
        // });

        // video.on('pause', () => {
        //     laker.hide();
        //     world.lakers.$block && world.lakers.$block.index();
        //     video[0].pause();
        //     world.sword.tryFun(callback2);
        // });
    }

    world.lakers.$video = laker;
    return laker;
});
