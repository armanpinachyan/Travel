

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
const menu_bar = document.getElementById('menu-bar')
const navbar = document.querySelector('.navbar')
const packages = document.querySelectorAll('.packages .inner .box')
const get = document.querySelector('.get')
const inner = document.getElementById('inner');
const packagesinner = document.querySelector('#services .inner')
const galleryinner = document.querySelector('#gallery .inner')

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




    
// packages



countrys.forEach((countryInfo, index) => {
    inner.insertAdjacentHTML('beforeend', printCountryItem(countryInfo, index))
})

function printStarts(count){
    let text = '';

    Array.from({length: 5}).forEach((item, index) =>  {
        if(index < count){
            text += '<i class="fa-solid fa-star"></i>'
        } else {
            text += '<i class="fa-regular fa-star"></i>'
        }
    })

    return text;

}



function printCountryItem(countryInfo, index){
    return `
        <div class="box">
            <img src="${countryInfo.url}">
            <div class="content">
                <h4><i class="fa-solid fa-location-dot"></i> ${countryInfo.name}</h4>
                <p>${countryInfo.text}</p>
                <div class="stars">
                    ${printStarts(countryInfo.star)}
                </div>
                <div class="price">$${countryInfo.percent} <span>$${countryInfo.price}</span></div>
                <a href="#" class="btn">Book now</a>
            </div>
        </div>
    `
}


// services 


services.forEach((servic, index)=>{
    packagesinner.insertAdjacentHTML('beforeend', printservices(servic, index))
 })

function printservices(servic,index){
    return  `<div class="box">
    <i class="${servic.icon}"></i>
    <h4>${servic.name}</h4>
    <p>${servic.text}</p>
        </div>`
}

// gallery


gallery.forEach((galleryinfo,index)=> {
    galleryinner.insertAdjacentHTML('beforeend', galleryprint(galleryinfo,index))
})

function galleryprint(galleryinfo,index){
    return `<div class="box">
    <img src="${galleryinfo.img}">
    <div class="content">
        <h4>${galleryinfo.name}</h4>
        <p>${galleryinfo.text}</p>
        <a href="#" class="btn">see more</a>
    </div>`
}



// search

search_bar_input.addEventListener('keyup', function(){
    const value = this.value.toLowerCase();
    const searchResult = countrys.filter((country) => country.name.toLowerCase().includes(value));
    const searchservices = services.filter((servic) => servic.name.toLowerCase().includes(value) );
    packagesinner.innerHTML = '';
    inner.innerHTML = '';
    searchResult.forEach((countryInfo, index) => inner.insertAdjacentHTML('beforeend', printCountryItem(countryInfo, index)))
    searchservices.forEach((servicinfo,index)=> packagesinner.insertAdjacentHTML('beforeend', printservices(servicinfo,index))) 
})