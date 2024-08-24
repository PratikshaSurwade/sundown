// const smooth = new LocoMotiveScroll({
//     el:document.querySelector(".main"),
//     smooth:true,
// })

const image = document.querySelector(".fixedImage");
const projects = document.querySelectorAll(".SingleProject");

projects.forEach(project => {
    project.addEventListener("mouseenter", function() {
        const imageUrl = project.getAttribute("myImage");
        image.style.backgroundImage = `url(${imageUrl})`;
        image.style.opacity = "1";
    });

    project.addEventListener("mouseleave", function() {
        image.style.opacity = "0";
    });
});

const project = document.querySelectorAll(".SingleProject");
console.log(project);
project.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        const showimage = e.getAttribute("myImage");
        image.style.backgroundImage= `url(${showimage})`;
    })
})


document.querySelectorAll('.headingName').forEach(header => {
    header.addEventListener('click', function() {
        // Remove 'active' class from all headers
        document.querySelectorAll('.headingName').forEach(h => h.classList.remove('active'));
        
        // Add 'active' class to the clicked header
        this.classList.add('active');
        
        // Get the image URL from the clicked header's 'myImage' attribute
        const imageUrl = this.getAttribute('myPhoto');
        console.log(imageUrl);
        
        //Get the Description from the clicked header's 'myText' attribute
        const imageDecription = this.getAttribute('myText');
        document.querySelector(".headingDescription").innerHTML=imageDecription;

        // Set the background image of the #image-display div
        document.querySelector('.headingImage').style.backgroundImage = `url(${imageUrl})`;
    });
});

// Optionally, you can trigger the click event on the first header to show an image by default
document.querySelector('.header').click();


// var loader = document.querySelector(".loader")

// setTimeout(function () {
//     loader.style.top = "-100%"
// }, 4000)
