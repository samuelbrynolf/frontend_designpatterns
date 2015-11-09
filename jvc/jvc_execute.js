
// https://github.com/dirkgroenen/jQuery-viewport-checker

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