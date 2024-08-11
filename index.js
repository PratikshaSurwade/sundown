// const smooth = new LocoMotiveScroll({
//     el:document.querySelector(".main"),
//     smooth:true,
// })

const image = document.querySelector(".fixedImage");
const imageShow = document.querySelector(".projectContainer");
imageShow.addEventListener("mouseenter",function(){
    image.style.display ="block";
})
imageShow.addEventListener("mouseleave",function(){
    image.style.display ="none";
})

const project = document.querySelectorAll(".SingleProject");
console.log(project);
project.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        const showimage = e.getAttribute("myImage");
        image.style.backgroundImage= `url(${showimage})`;
    })
})

// var loader = document.querySelector(".loader")

// setTimeout(function () {
//     loader.style.top = "-100%"
// }, 4000)
