const doc = document;
const slideList = doc.querySelectorAll('.slide');
const prev = doc.querySelector('.slider-btn_prev');
const next = doc.querySelector('.slider-btn_next');

let i = 0;

prev.onclick = function(){
    slideActivePrev(slideList);
};

function slideActivePrev(list){
    list[i].classList.remove('slide_active');
    i--;

    if(i < 0) {
    i = list.length - 1;
    }

    list[i].classList.add('slide_active');
};



next.onclick = function(){
    slideActiveNext(slideList);
};

function slideActiveNext(list){
    list[i].classList.remove('slide_active');
    i++;

    if(i >= list.length) {
    i = 0;
    }

    list[i].classList.add('slide_active');
};

