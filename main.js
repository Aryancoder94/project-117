
quick_draw_data_set=['pen','paper','book','bottle'];
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
element_of_array = quick_draw_data_set[random_no];
console.log(quick_draw_data_set);
var sketch=quick_draw_data_set;
document.getElementById("sketchtbedrawn_p").innerHTML = sketch;
var timer_counter=0;
var timer_sketch="";
var draw_sketch="";
var answer_holder="";
var score=0;

function preload() {
    
}

function setup() {
    
}

function draw() {
    
}