
let slider = document.querySelector('.image-slider .list');
let items = document.querySelectorAll('.image-slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('previous');
let dots = document.querySelectorAll('.image-slider .dots li');

let lengthItems = items.length - 1;

let active = 0;

// next button
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

// previous button
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

// slide View
let refreshInterval = setInterval(()=> {next.click()}, 6000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 7000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

