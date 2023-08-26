var page1 =document.querySelector(".page1")
var page1image = document.querySelector(".page1-image")
var imagechange=1
page1.addEventListener("click",function(){
    if(imagechange === 1){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/digital-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/digital-_920x488.webp)`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange++
    }else if(imagechange === 2){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/nos-regions-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/nos-regions-_920x488.webp)`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange++
    }else if(imagechange === 3){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/immobilier-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/immobilier-_920x488.webp)`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange++
    }else if(imagechange === 4){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/sport-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/sport-_920x488.webp)`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange++
    }else if(imagechange === 5){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/illustration-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/illustration-_920x488.webp)`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange++
    }else if(imagechange === 6){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/culturel-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/culturel-_920x488.webp)`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange++    
    }else if(imagechange === 7){
        page1.style.backgroundImage=`url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/corporate-920x490.webp)`
        page1image.style.backgroundImage= `url(https://nugguy.fr/images/PAGE_UNIVERS_GLOBAL/corporate-_920x488.webp)`
        document.querySelector(".dot7").innerHTML=`<i class="ri-circle-fill"></i>`
        document.querySelector(".dot2").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot3").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot4").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot5").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot6").innerHTML=`<i class="ri-circle-line"></i>`
        document.querySelector(".dot1").innerHTML=`<i class="ri-circle-line"></i>`
        imagechange=1    
    }

})









var menuicon = document.querySelector(".menu-icon")
var page2 = document.querySelector(".page2")
var flag = 0
menuicon.addEventListener("click",function(){
    if(flag === 0){
        menuicon.innerHTML=`<i class="ri-close-fill"></i>`
        page2.style.zIndex= "2"
        page2.style.top= "0%"
        page2.style.right= "0%"
        flag = 1
    }else{
        menuicon.innerHTML=`<i class="ri-menu-fill"></i>`
        page2.style.zIndex= "-5"
        // page2.style.display= "none"
        flag = 0
    }
})
// page2.addEventListener("click",function(){
//     menuicon.innerHTML=`<i class="ri-menu-fill"></i>`
//     page2.style.zIndex= "-5"

// })

var agency = document.querySelector(".agency")
var Univers = document.querySelector(".Univers")
var Services = document.querySelector(".Services")
var content = document.querySelector(".content")

var agencyul = document.querySelector(".agency-ul")
var Universul = document.querySelector(".Univers-ul")
var Servicesul = document.querySelector(".Services-ul")
var contentul = document.querySelector(".content-ul")


var acount = 0
    agency.addEventListener("mouseenter",function(){
        agency.style.webkitTextFillColor="black"            
        Univers.style.webkitTextFillColor="transparent"
        Services.style.webkitTextFillColor="transparent"
        content.style.webkitTextFillColor="transparent"
        Universul.style.display="none"
        Servicesul.style.display="none"
        contentul.style.display="none"
        agencyul.style.display="initial"
    
})

Univers.addEventListener("mouseenter",function(){
    Univers.style.webkitTextFillColor="black"
    Services.style.webkitTextFillColor="transparent"
    content.style.webkitTextFillColor="transparent"
    agency.style.webkitTextFillColor="transparent"
    Servicesul.style.display="none"
    agencyul.style.display="none"
    contentul.style.display="none"
    Universul.style.display="initial"

})

Services.addEventListener("mouseenter",function(){
    Services.style.webkitTextFillColor="black"
    content.style.webkitTextFillColor="transparent"
    agency.style.webkitTextFillColor="transparent"
    Univers.style.webkitTextFillColor="transparent"
    Universul.style.display="none"
    agencyul.style.display="none"
    contentul.style.display="none"
    Servicesul.style.display="initial"

})

content.addEventListener("mouseenter",function(){
    content.style.webkitTextFillColor="black"
    agency.style.webkitTextFillColor="transparent"
    Univers.style.webkitTextFillColor="transparent"
    Services.style.webkitTextFillColor="transparent"
    Universul.style.display="none"
    agencyul.style.display="none"
    Servicesul.style.display="none"
    contentul.style.display="initial"

})
