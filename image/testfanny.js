//greensock//

//controller
var controller = new ScrollMagic.Controller();
//tween
var tween = TweenMax.to(".float-word", 1, { left: -200, ease: Power2.easeInOut })

//var Scene scrollmagic
var scene = new ScrollMagic.Scene({ triggerElement: ".big-arrow", offset: -200 })
    .triggerHook(0.4)
    .addIndicators({ name: "qui", colorTrigger: "red", indent: 200 })
    .setTween(tween)
    .reverse(false)
    .addTo(controller)


    
//scrollmagic box1//
    var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box1',
    reverse: false


})
    .setClassToggle('.box1', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 100,
        colorStart: '#fff'
    })
    .addTo(controller);
//scrollmagic qui//
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.qui',
    reverse: false


})
    .setClassToggle('.qui', 'fade-in')
    .addIndicators({
        name: 'photo',
        indent: 200,
        colorStart: '#fff'
    })
    .addTo(controller);