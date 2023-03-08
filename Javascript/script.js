


const search =  document.getElementById('opensearch')
const search_bar = document.querySelector('.search-bar')
const search_bar_input = document.getElementById('search')
const user = document.getElementById('user')
const close = document.getElementById('close')
const login_now = document.getElementById('login')
const sliderItems = document.querySelectorAll('.header-slider-item');
const sliderButtons = document.querySelector('.butons');
const right = document.querySelector('.rigth')
const left = document.querySelector('.left')
const butonsSpan = document.querySelectorAll('.butons span')
const menu_bar = document.getElementById('menu-bar')
const navbar = document.querySelector('.navbar')
const packages = document.querySelectorAll('.packages .inner .box')
const get = document.querySelector('.get')











search.addEventListener('click', (e)=>{
    e.preventDefault()
    search_bar.classList.toggle('active')
} )

user.addEventListener('click', (e) =>{
    e.preventDefault()
    login_now.classList.add('active')
})

close.addEventListener('click', (e) =>{
    e.preventDefault()
    login_now.classList.remove('active')
})

menu_bar.addEventListener('click', (e)=>{
    navbar.classList.toggle('active')
})


// slider


sliderItems.forEach((elem,index)=>{
    const span = document.createElement('span')
    span.classList.add('slider')
    sliderButtons.appendChild(span)
    if(index == 0){
        span.classList.add('active')
        elem.classList.add('active')
    }

    if(index == sliderItems.length-1){
        startslider()
    }
})

function startslider(){
    const butonsSpan = document.querySelectorAll('.butons span')
    butonsSpan.forEach((elem,index)=>{
        elem.addEventListener('click', ()=>{
            butonsSpan.forEach((elem)=> elem.classList.remove('active'))
            elem.classList.add('active')
                console.log(index);
            sliderItems.forEach(elem => elem.classList.remove('active'))
            sliderItems[index].classList.add('active')
        })
    })

}

let num = 0
let back = 2

right.onclick = () => changeSlider('plus')
left.onclick = () => changeSlider('minous')



function clearactive(){
    const butonsSpan = document.querySelectorAll('.butons span')
    butonsSpan.forEach(elem=>{
        if(elem.classList.contains('active')){
            elem.classList.remove('active')
            sliderItems.forEach(elem => elem.classList.remove('active'))
        }
    })
}

function changeSlider(numStatus){
    const butonsSpan = document.querySelectorAll('.butons span');

    numStatus == 'plus' ? num++ : num --;

    // num >= butonsSpan.length ? num = 0 : num < 0 ? num = butonsSpan.length - 1 : '';
    if(num >= butonsSpan.length){
        num = 0
    } else if(num < 0){
        num = butonsSpan.length-1
    }
    clearactive()
    butonsSpan[num].classList.add('active')
    sliderItems[num].classList.add('active')
}
    




// sliderItems.forEach((item, index) => {

//     const elm = document.createElement('span');
//     elm.classList.add('slider');
//     sliderButtons.append(elm);
//     if(index === 0){
//         elm.classList.add('active');
//         item.classList.add('active')
//     }

//     if(index === sliderItems.length - 1){
//         startChangeSlider()
//     }
// })

// let sliderindex = 0;

// function startChangeSlider(){
//     const buttonsSpan = document.querySelectorAll('.butons span');
//     buttonsSpan.forEach((itemSpan, indexSpan) => {
//         itemSpan.addEventListener('click', function(){

//             buttonsSpan.forEach((item) => item.classList.remove('active'));
//             this.classList.add('active');

//             sliderItems.forEach((itemsSlider) => itemsSlider.classList.remove('active'));
//             sliderItems[indexSpan].classList.add('active');

//         })
//     })
// }

// function nextSlider(){
//     const buttonsSpan = document.querySelectorAll('.butons span');
//     buttonsSpan.forEach((item, index) => {
//         if(item.classList.contains('active')){
//             const activeIndex = index + 1;
//             nextPrevSlider(activeIndex)
//         }
//     })
// }

// function nextPrevSlider(index){
//     const buttonsSpan = document.querySelectorAll('.butons span');
//     buttonsSpan.forEach((item) => item.classList.remove('active'));
    
//         if(!buttonsSpan[index].contains('active')){
//         buttonsSpan[index].classList.add('active')
//         }
//     }



