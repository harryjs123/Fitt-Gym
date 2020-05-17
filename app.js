function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        console.log('timeElapsed : ' + timeElapsed + 'duration: ' + duration);
    
     }

     function ease(t, b, c, d) {
         t /=d / 2;
         if (t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t *(t - 2) - 1) + b;
     }


    requestAnimationFrame(animation);

}

var aboutBtn = document.querySelector('.about-button');
var aboutSection = document.querySelector('.about-section');
var classesBtn = document.querySelector('.classes-button');
var classesHeading = document.querySelector('.classes-header');
var ptBtn = document.querySelector('.pt-button');
var ptSection = document.querySelector('.pt-section');
var contactBtn = document.querySelector('.contact-button');
var contactSection = document.querySelector('.contact-section');






aboutBtn.addEventListener('click', function(){
    smoothScroll('.about-section', 1000);
});

aboutSection.addEventListener('click', function(){
    smoothScroll('.about-button', 1000);
});

classesBtn.addEventListener('click', function(){
    smoothScroll('.classes-header', 1000);
});

classesHeading.addEventListener('click', function(){
    smoothScroll('.classes-button', 1000);
});

ptBtn.addEventListener('click', function(){
    smoothScroll('.pt-section', 1000);
});

ptSection.addEventListener('click', function(){
    smoothScroll('.pt-button', 1000);
});

contactBtn.addEventListener('click', function(){
    smoothScroll('.contact-section', 1000);
});

contactSection.addEventListener('click', function(){
    smoothScroll('.contact-button', 1000);
});


















