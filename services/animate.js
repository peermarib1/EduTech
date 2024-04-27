
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');//200
let box3 = document.getElementById('box3');//166
let box1n = document.getElementById('box1n');
let box2n = document.getElementById('box2n');
let box3n = document.getElementById('box3n');
let box1x = document.getElementById('box1x');
let box2x = document.getElementById('box2x');
let box3x = document.getElementById('box3x');
let box1a = document.getElementById('box1a');
let box2a = document.getElementById('box2a');
let box3a = document.getElementById('box3a');
let certi = document.getElementById('certi');
// let certificates = document.getElementById('certificates');
// let Whole = document.getElementById("Whole");
let  circkle = document.getElementById('circkle');


window.addEventListener('scroll', () => {
  
    // let valuee = window.scrollY - Whole.offsetTop;
        let value = window.scrollY-166;
        let valuee1 = window.scrollY-300;
        // let valuee1 = window.scrollY-232;
        let value1 = window.scrollY-200;//for box 2
        let value10 = window.scrollY-3076;//for box 2
        let value11n = window.scrollY-2153;// for engin
        let value11a = window.scrollY-2766;// for all

    box1n.style.transform = 'translateX('+ 1.5 * valuee1 + 'px' + ')' ;
    box2n.style.transform = 'translateY('+ 1.5 * -valuee1 + 'px' + ')' ;
    certi.style.transform = 'translateY('+ value10 + 'px' + ')' ;
    

    if (value <= 0) {
    box1.style.transform = 'translateX('+ 1.5 * value + 'px' + ')' ;
    box3.style.transform = 'translateX('+ -value *1.5  + 'px' + ')' ;
      } 
      else if (value == 0.0) {
        box1.style.transform = 'translateX(' + '0' + 'px' + ')' ;
        box3.style.transform = 'translateX(' + '0' + 'px' + ')' ;
      } 
      else{
        box1.style.transform = 'translateX(' + '0' + 'px' + ')' ;
        box3.style.transform = 'translateX(' + '0' + 'px' + ')' ;
      }
      if (value <= 0) {
        box2.style.transform = 'translateY('+ -value1 *1.5 + 'px' + ')' ;
          } 
          else if (value == 0.0) {
            box2.style.transform = 'translateY(' + '0' + 'px' + ')' ;
          } 
          else{
            box2.style.transform = 'translateY(' + '0' + 'px' + ')' ;
          }

    if (valuee1 <= 0) {
    box1n.style.transform = 'translateX('+ 1.5 * valuee1 + 'px' + ')' ;
    box2n.style.transform = 'translateY('+ 1.5 * -valuee1 + 'px' + ')' ;
    box3n.style.transform = 'translateX('+ -valuee1 *1.5  + 'px' + ')' ;
      } 
      else if (valuee1 == 0.0) {
        box1n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
        box2n.style.transform = 'translateY(' + '0' + 'px' + ')' ;
        box3n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
      } 
      else{
        box1n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
        box2n.style.transform = 'translateY(' + '0' + 'px' + ')' ;
        box3n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
      }
    if (valuee1 <= 0) {
    box1n.style.transform = 'translateX('+ 1.5 * valuee1 + 'px' + ')' ;
    box2n.style.transform = 'translateY('+ 1.5 * -valuee1 + 'px' + ')' ;
    box3n.style.transform = 'translateX('+ -valuee1 *1.5  + 'px' + ')' ;
      } 
      else if (valuee1 == 0.0) {
        box1n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
        box2n.style.transform = 'translateY(' + '0' + 'px' + ')' ;
        box3n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
      } 
      else{
        box1n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
        box2n.style.transform = 'translateY(' + '0' + 'px' + ')' ;
        box3n.style.transform = 'translateX(' + '0' + 'px' + ')' ;
      }


    //   Copy that
    if (value11n <= 0) {
        box1x.style.transform = 'translateX('+ 1.5 * +value11n + 'px' + ')' ;
        box2x.style.transform = 'translateY('+ 1.5 * -value11n + 'px' + ')' ;
        box3x.style.transform = 'translateX('+ -value11n *1.5  + 'px' + ')' ;
          } 
          else if (value11n == 0.0) {
            box1x.style.transform = 'translateX(' + '0' + 'px' + ')' ;
            box2x.style.transform = 'translateY(' + '0' + 'px' + ')' ;
            box3x.style.transform = 'translateX(' + '0' + 'px' + ')' ;
          } 
          else{
            box1x.style.transform = 'translateX(' + '0' + 'px' + ')' ;
            box2x.style.transform = 'translateY(' + '0' + 'px' + ')' ;
            box3x.style.transform = 'translateX(' + '0' + 'px' + ')' ;
          }
    // COPY That

    
    //   Copy that 101
    if (value11a <= 0) {
        box1a.style.transform = 'translateX('+ 1.5 * +value11a + 'px' + ')' ;
        box2a.style.transform = 'translateY('+ 1.5 * -value11a + 'px' + ')' ;
        box3a.style.transform = 'translateX('+ -value11a *1.5  + 'px' + ')' ;
          } 
          else if (value11a == 0.0) {
            box1a.style.transform = 'translateX(' + '0' + 'px' + ')' ;
            box2a.style.transform = 'translateY(' + '0' + 'px' + ')' ;
            box3a.style.transform = 'translateX(' + '0' + 'px' + ')' ;
          } 
          else{
            box1a.style.transform = 'translateX(' + '0' + 'px' + ')' ;
            box2a.style.transform = 'translateY(' + '0' + 'px' + ')' ;
            box3a.style.transform = 'translateX(' + '0' + 'px' + ')' ;
          }
    // COPY That 101

      if (value10 <= 0) {
        certi.style.transform = 'translateY('+ 1.5 * value10 + 'px' + ')' ;
          } 
          else if (value10 == 0.0) {
            certi.style.transform = 'translateY(' + '0' + 'px' + ')' ;
          } 
          else{
            certi.style.transform = 'translateY(' + '0' + 'px' + ')' ;
          }
// console.log(valuee1);
      
    
  console.log(value11a);
});
// new cursoreffects.sec({ element: document.querySelector("#sec") });
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

document.getElementById('sec').addEventListener('mousemove', function (e) {
  coords.x = e.clientX; // Update cursor's X coordinate
  coords.y = e.clientY; // Update cursor's Y coordinate

  animateCircles(); // Call the animateCircles function
  // console.log(e);
});

function animateCircles() {
  let x = coords.x; // Get cursor's X coordinate
  let y = coords.y; // Get cursor's Y coordinate
  // let xx = coords.x - 10; // Get cursor's X coordinate
  // let yy = coords.y - 12; // Get cursor's Y coordinate


  circles.forEach(function (circle) {
    // circle.style.transform = `translate(${coords.x}px, ${coords.y}px)`; // Apply combined translation
    // circle.style.cursor = 'none'; // No Cursore

    
    // console.log(coords.x, coords.y);
  });

  requestAnimationFrame(animateCircles); // Request the next animation frame
}

animateCircles(); // Initial call to start animation