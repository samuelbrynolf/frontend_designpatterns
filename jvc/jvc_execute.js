
// https://github.com/dirkgroenen/jQuery-viewport-checker
// Dont forget no-js in header for styling-fallback: document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');

(function($) {

    function example(){
        alert('hey ya');
    }

    if($.fn.viewportChecker) {

        $('.js-JVC').viewportChecker({
            classToAdd: 's-is-active',
            offset: 168,
            callbackFunction: example,
            repeat: false
        });
    }

})(jQuery);