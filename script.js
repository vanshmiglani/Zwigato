
function add_here() {
    let make = document.getElementById('add_for')
    if (make.style.display === 'none') {
        make.className = 'add_here'
        make.style.display = 'block'

    }
    else {
        make.style.display = 'none';
    }
}
const typed = new Typed('#element', {

    strings: ['Zwigato....'],

    typeSpeed: 35,
});


function fade() {
    let dom = document.getElementById('make_it_visible')
    dom.className = "make_it_here"

}

const typing = new Typed('#named', {

    strings: ['Here we Providing Food  Delievery Services <br> at your city from food suggesting <br> by your near restaurants'],
    
    typeSpeed: 30,
    loop : true
});

function show_menu1(){
    let show = document.getElementById('menu_1')
    if(show.style.display === 'none'){
        
        show.classname = 'menu_showing'
        show.style.transition = 'all 0.3s ease'
        show.style.display = 'block'
        show.style.transition ='all 0.3s ease'
    }
    else{
        show.style.display = 'none'
    }

}
function show_menu2(){
    let show = document.getElementById('menu_2')
    if(show.style.display === 'none'){
        
        show.classname = 'menu_showing'
        show.style.transition = 'all 0.3s ease'
        show.style.display = 'block'
        show.style.transition ='all 0.3s ease'
    }
    else{
        show.style.display = 'none'
    }

}
function show_menu3(){
    let show = document.getElementById('menu_3')
    if(show.style.display === 'none'){
        
        show.classname = 'menu_showing'
        show.style.transition = 'all 0.3s ease'
        show.style.display = 'block'
        show.style.transition ='all 0.3s ease'
    }
    else{
        show.style.display = 'none'
    }

}


let head = document.getElementById('mouse_hover')
head.addEventListener('mouseover',function make_hover(){
    let idea = document.getElementById('idea')
    if(idea.style.display === 'none'){
        idea.className = 'make_a_wish'
        idea.style.display = 'block'
    }
    else{
        idea.style.display = 'none'
    }
})

let bg2 = document.getElementById('bg2')
let make_over = document.getElementById('make_hover')
let all = document.getElementById('all')

function make_run(){
    if(all.style.display === 'none'){
        all.style.display = 'block'
        all.className = 'check_animation'
    }
    else{
        all.style.display = 'none'
    }
}