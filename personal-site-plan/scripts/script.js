//universal animation
//header scroll animation
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("site-main-header").classList.add("scrolled-header-style")
    //document.getElementsByClassName("site-main-header").classList.add("scrolled-header-style")
    //document.querySelector("header").classList.add("scrolled-header-style")
    /*var nodeList = document.querySelectorAll("header.site-main-header");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add("scrolled-header-style")
    }*/
  } else {
    document.getElementById("site-main-header").classList.remove("scrolled-header-style")
    //document.getElementsByClassName("site-main-header").classList.add("scrolled-header-style")
    //document.querySelector("header").classList.remove("scrolled-header-style")
    /*var nodeList = document.querySelectorAll("header.site-main-header");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove("scrolled-header-style")
    }*/
  }
}

window.onscroll = function() {scrollFunction()};



//animation for index.html
if ((window.location.pathname == "/wdd130/personal-site-plan/index.html") || (window.location.pathname == "/personal-site-plan/index.html")) {
  //or (window.location.pathname == '/personal-site-plan/index.html') for visual studio code local host to work
  //animated profile carousel
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "inline-block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

//typewriter effect
var messageArray = "";
var textPosition = 0;
var textPosition1 = messageArray.length;
var speed = 150;

typewriter = () => {
    document.querySelector("#typewriter").innerHTML = messageArray.substring(0, textPosition) + "<span>\|</span>";

    if(textPosition++ <= messageArray.length) {
        setTimeout(typewriter, speed);
    } else {       
        setTimeout(reversetypewriter, 3000)    
    }
}

reversetypewriter = () => {
    document.querySelector("#typewriter").innerHTML = messageArray.substring(0, textPosition1) + "<span>|</span>";

    if(textPosition1-- >= 0) {
        setTimeout(reversetypewriter, speed);
    } else {
        setTimeout(textSelector, speed);
        arrayPosition++;
    }
}

var theMessageArray = ["How can I help you?", "Have you met Greg?", "Your Friendly Neighborhood VA is Here!"]
var arrayPosition = 0;
textSelector = () => {
    if (arrayPosition < theMessageArray.length) {
      
      messageArray = theMessageArray[arrayPosition];
      textPosition1 = messageArray.length;
      textPosition = 0;
      setTimeout(typewriter, speed);
      
    } else {
      arrayPosition = 0;
      messageArray = theMessageArray[arrayPosition];
      textPosition1 = messageArray.length;
      textPosition = 0;
      setTimeout(typewriter, speed);
      
    }

    
}

 window.addEventListener("load", textSelector);

}

function skillBarAnimation(x) {
  
  var counter = 0
  var selector = "#" + x.getAttribute("id") + " .progress-line > span"
  var span_element = document.querySelector(selector)
  var skill_percent = +x.getAttribute("data-percent")


  var updateSkillLevel = () => {
    if (counter < skill_percent) {
      counter = counter + 1
      span_element.setAttribute('data-skills-percent', counter + "%")
      span_element.style.width = counter + "%";
      setTimeout(updateSkillLevel, 10)
    } else {
      counter = skill_percent
      span_element.setAttribute('data-skills-percent', counter + "%")
      span_element.style.width = counter + "%";
    }
  }

  setTimeout(updateSkillLevel, 200)

  
}



//Perhaps you can add an else statement containing:  textPosition = 0;
   // setTimeout(typewriter, speed);




/*

  var updateCounter = () => {
    var skill_percent = +x.getAttribute("data-percent")
    if (counter < skill_percent) {
      counter = counter + 1
      document.querySelector(selector).setAttribute('data-skills-percent', counter)
      setTimeout(updateCounter, 500)
    } else {
      counter = skill_percent
      document.querySelector(selector).setAttribute('data-skills-percent', counter)
    }


  }






*/










/* The text */
/* The speed/duration of the effect in milliseconds */

/*
var txt = 'Have you met Greg?'; 
var a = 0;
var b = txt.length;
var speed = 50; 

function typeWriter() {
    if (a <= txt.length) {
      document.getElementById("typewriter").innerHTML = txt.substring(0, a);
      a++;
      setTimeout(typeWriter, speed);
    }
  }


function reverseTypeWriter() {
  if (b > 0) {
    document.getElementById("typewriter").innerHTML = txt.substring(0, b);
    b--;
    setTimeout(reverseTypeWriter, speed);
    }
  }

  function newWriter() {
    if (a <= txt.length) {
      document.getElementById("typewriter").innerHTML = txt.substring(0, a);
      a++;
      setTimeout(newWriter, speed);
    }
    console.log('1 was run3')
  }

setTimeout(typeWriter, 2000);
setTimeout(reverseTypeWriter, 6000);
setTimeout(newWriter, 10000);

function running(){
    console.log('1 was run1')
    setTimeout(typeWriter, 20000);
    console.log('I was run2')
}

*/








/*

document.getElementById("typewriter").innerHTML = txt.substring(0, txt.length-3);
reverseTypeWriter();

var b = text.length;
function reverseTypeWriter() {
    if (b > 0) {
      document.getElementById("typewriter").innerHTML += txt.charAt(b);
      b--;
      setTimeout(reverseTypeWriter, speed);
    }
  }

*/






