//hide and show the navbar

document.querySelector(".close-btn .menu").addEventListener("click",() => {
    document.querySelector(".nav_bar").style.display = "flex";
    document.querySelector(".close-btn .close").style.display = "block";
    document.querySelector(".close-btn .menu").style.display = "none";
})

document.querySelector(".close-btn .close").addEventListener("click",() => {
        document.querySelector(".nav_bar").style.display = "none";
        document.querySelector(".close-btn .menu").style.display = "block";
        document.querySelector(".close-btn .close").style.display = "none";
})

/*this is used to show the nav bar after clicking on the 
close button and resize the window*/
window.addEventListener('resize', () => {
    if(window.innerWidth > 755 ){
        document.querySelector(".nav_bar").style.display = 'flex';
    }
    if(window.innerWidth < 720 ){
       //this is used to show the nav if the closee icon is block
       if(document.querySelector(".close-btn .menu").style.display == "block"){
            //document.querySelector(".nav_bar").style.display = 'none';
       }
      
        
    }
});

//this is used to hide the list when we click on a category of it
document.querySelectorAll(".nav_bar li").forEach(element => {
    element.addEventListener("click",() => {
        if(window.innerWidth < 720){
            document.querySelector(".nav_bar").style.display = "none";
            document.querySelector(".close-btn .menu").style.display = "block";
            document.querySelector(".close-btn .close").style.display = "none";
        }
        
    })
});

//showing sections when we do scrolling
//this is for about section
window.addEventListener("scroll",() => {
    if(window.scrollY >  262.6666564941406){
        document.querySelector("#about").style.opacity= "1";
    }
    else{
        document.querySelector("#about").style.opacity= "0";
    }
})
//this is for instructor section
window.addEventListener("scroll",() => {
    if(window.scrollY >  844.6666870117188){
        document.querySelector("#instructor").style.opacity= "1";
    }
    else{
        document.querySelector("#instructor").style.opacity= "0";
    }
})
//this is for classe section
window.addEventListener("scroll",() => {
    if(window.scrollY >  1381.3333740234375){
        document.querySelector("#classes").style.opacity= "1";
    }
    else{
        document.querySelector("#classes").style.opacity= "0";
    }
})
//this is for contact section
window.addEventListener("scroll",() => {
    if(window.scrollY >  1896.6666259765625){
        document.querySelector("#contact").style.opacity= "1";
    }
    else{
        document.querySelector("#contact").style.opacity= "0";
    }
})

