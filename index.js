// Store a reference to our paths, excluding our clip path
var paths = $('path:not(defs path)');

// For each path, set the stroke-dasharray and stroke-dashoffset
// equal to the path's total length, hence rendering it invisible
paths.each(function(i, e) {
  e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
});

// Create a timeline for ease of manipulation and the possibility
// to play the animation back and forth at the requested speed.
var tl = new TimelineMax();

// Add each separate line animation to the timeline, animating the 
// stroke-dashoffset to 0. Use the duration, delay and easing to
// achieve the perfect animation.
tl.add([
  TweenLite.to(paths.eq(0), 10, {
    strokeDashoffset: 0,
    delay: 0.0,
    autoAlpha: 1
  })
]);
