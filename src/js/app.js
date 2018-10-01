require(['jquery', 'script', 'helper/lakers'], ($, script) => {
    const world = window.myWorld;

    // 设置根节点
    world.root = $('body');
    script(1);
});
