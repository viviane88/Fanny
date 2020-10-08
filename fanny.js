//scrollmagic box1//
    var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box1',
    reverse: false,
})
    .setClassToggle('.box1', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 100,
        colorStart: 'white'
    })
    .addTo(controller);

//scrollreveal qui//
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.qui',
    reverse: false

})
    .setClassToggle('.qui', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 100,
        colorStart: 'white'
    })
    .addTo(controller);

//scrollreveal .float-word//
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.float-word',
    reverse: false,

})
    .setClassToggle('.float-word', 'fade-in')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 100,
        colorStart: 'white'
       
    })
    .addTo(controller);


    
    

//scrollreveal .test-image//
 var controller = new ScrollMagic.Controller();
 

 var scene = new ScrollMagic.Scene({

     triggerElement: '.choco-photo',
     reverse: false,
     

 })
     .setClassToggle('.choco-photo', 'fade-in')
     .addIndicators({
         name: 'INDICATIONS',
         indent: 100,
         colorStart: 'white'
       
     })
     .addTo(controller);







    // animation avec le style, la durée et l'évolution TEST 
//  $('h1').animate({
//      padding : '50px'
//  },'slow','linear');



//   $('.test-image')
//   .css('width','400px')
//   .animate({
//       width   : [ '800px' , 'linear' ]
//     , opacity : 0.5
//   }, 'linear');
let watchme = document.getElementById('watchme')

watchme.className = 'slidein'
const listener = (e) => {
  watchme.className = 'slidein stopped'
}
watchme.addEventListener('click', () =>
  watchme.addEventListener('animationiteration', listener, false)
)