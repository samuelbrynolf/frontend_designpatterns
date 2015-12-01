function fadeImg(elem){
    var fadeTarget = elem.find('img');

    fadeTarget.each(function(i){
        var $this = $(this);

        setTimeout(function(){
            $this.css('opacity', '1');
        }, i*150);
    });
}