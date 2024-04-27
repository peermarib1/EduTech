let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let tree = document.getElementById('tree');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY-1621;

    if (value >= 0) {
        text.style.marginTop = value * 2.5 + 'px';
    tree.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
          } 
          else if (value <= 0.0) {
        text.style.marginTop = 0  + 'px';
        tree.style.marginTop = 0  + 'px';
        leaf.style.top = 0 + 'px';
        leaf.style.left = 0 + 'px';
        hill5.style.left = 0 + 'px';
        hill4.style.left = 0 + 'px';
        hill1.style.top = 0 + 'px';
          } 
          else{
            hill4.style.transform = 'translateX(' + '0' + 'px' + ')' ;
            tree.style.transform = 'translateX(' + '0' + 'px' + ')' ;
          }
    
    // console.log(value);
});
