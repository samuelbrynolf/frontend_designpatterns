(function($) {

    setTimeout(function(){
        var wflObjects = [

            '#wfl-test',
            '.example-2'

        ].join(', ');

        $(wflObjects).css({
            'visibility' 	: 'visible',
            'opacity' 		: '1',
            'transform'		: 'translate3d(0,0,0)',
        });
    },2250);

})(jQuery); // End self-invoking function