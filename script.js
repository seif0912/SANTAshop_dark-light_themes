/// Selectors
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const sw = document.querySelector(".switch");
const logo = document.querySelector("header h1");
const burgerS = document.querySelectorAll(".burger span");
const navLinks = document.querySelectorAll('nav a');
const pCon = document.querySelector(".convert p");
const img = document.querySelector("img");


/// responsive header
burger.addEventListener("click", function () {
    burger.classList.toggle("clicked");
    nav.classList.toggle("nav-clicked");
});
//  fix resizing
window.addEventListener("resize", function () {
    const winWidth = window.innerWidth;
    if (winWidth >= 640 && burger.classList.contains("clicked")) {
        burger.classList.remove("clicked");
        nav.classList.remove("nav-clicked");
    }
});

/// call functions
getTasks()
dark()


/// dark theme
function dark(){
    sw.addEventListener('click',()=>{
    sw.classList.toggle('clicked');
    document.body.classList.toggle('clicked');
    logo.classList.toggle('clicked');
    burgerS.forEach((item)=>{
        item.classList.toggle("clicked")
    })
    navLinks.forEach((item)=>{
        item.classList.toggle("clicked")
    })
    pCon.classList.toggle('clicked');
    img.classList.toggle('clicked');
    
    if(!document.body.classList.contains("clicked")){
        saveLocal('')
    }else{
        saveLocal('.clicked')
    }
    
})
}

/// save theme in local storage
function saveLocal(task) {
    let tasksL;
    if (localStorage.getItem('tasksL') === null) {
        tasksL = '';
    } else {
        tasksL = JSON.parse(localStorage.getItem('tasksL'));
    }
    
    tasksL = task ;
    localStorage.setItem("tasksL", JSON.stringify(tasksL))
}

/// get theme from local storage
function getTasks() {
    let tasksL;
    if (localStorage.getItem('tasksL') === null) {
        tasksL = '';
        return
    } else {
        tasksL = JSON.parse(localStorage.getItem('tasksL'));
    }

    if(tasksL === '.clicked'){
        darkThemeOn()
    }else{
        darkThemeOff()
    }
    return
}

function darkThemeOn(){
    sw.classList.add('clicked');
    document.body.classList.add('clicked');
    logo.classList.add('clicked');
    burgerS.forEach((item)=>{
        item.classList.add("clicked")
    })
    navLinks.forEach((item)=>{
        item.classList.add("clicked")
    })
    pCon.classList.add('clicked');
    img.classList.add('clicked');

}

function darkThemeOff(){
    sw.classList.remove('clicked');
    document.body.classList.remove('clicked');
    logo.classList.remove('clicked');
    burgerS.forEach((item)=>{
        item.classList.remove("clicked")
    })
    navLinks.forEach((item)=>{
        item.classList.remove("clicked")
    })
    pCon.classList.remove('clicked');
    img.classList.remove('clicked');

}
