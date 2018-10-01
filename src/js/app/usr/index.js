// 剧本

define([
    'text!../components/usr/index.html!strip',
    'helper/rivers',
    'utils/sword'],
(html) => {
    const world = myWorld;
    const river = {};

    // 挂载
    river.mount = function() {
        if (!this.$root) {
            world.root.append(html);
            this.$root = world.root.find('.usr-index');
        }
    };

    river.show = () => {
        river.$root.show();
    };

    river.hide = () => {
        river.$root.hide();
    };

    // 销毁
    river.destroy = function() {
        this.$root.remove();
        this.$root = null;
    };

    world.rivers.$index = river;
    return river;
});
