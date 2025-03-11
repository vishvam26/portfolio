
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick) {
    resumeTabContents.forEach((tabContent) => {
        tabContent.style.display = "none";
        tabContent.classList.remove("active");
    });

    resumePortfolioTabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    
    if (resumeTabContents[resumeTabClick]) {
        resumeTabContents[resumeTabClick].style.display = "flex";
        setTimeout(() => {
        resumeTabContents[resumeTabClick].classList.add("active");
        },100);
    }

    if (resumePortfolioTabBtns[resumeTabClick]) {
        resumePortfolioTabBtns[resumeTabClick].classList.add("active");
    }
};

resumePortfolioTabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {  
        resumeTabNav(i);
    });
});



window.addEventListener("scroll", () => {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink" , window.scrollY > 0);
});

window.addEventListener("scroll" , () => {
   const nevMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY =window.pageXOffset;

   navMenuSections.forEach((navMenuSection) => {
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop = navMenuSection.offsetTop - 50;
      let id = navMenuSection.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
         document.querySelector(".bottom.nav .menu li a[href*=" + id +  "]").classList.add("current");
      }else{
         document.querySelector(".bottom-nav .menu li a[helf*=" + id + "]").classList.remove("current");
      }
   });
});


const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click" , () => {

   themeBtn.classList.toggle("active-sun-icon");
   document.body.classList.toggle("light-theme");

   const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
   const getCurrenTheme = () => themeBtn.body.classList.contains("active-sun-icon") ? "light" : "dark";

   localStorage.setItem("sue-saved-icon" , getCurrentIcon());
   localStorage.setItem("sue-saved-theme" ,getCurrenTheme());
});

const savedIcon = localStorage.getItem("sue-save-icon");
const savedTheme = localStorage.getItem("sue-saved-theme");

document.addEventListener("DOMContentLoaded" , () =>{
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
   document.body.classList[savedTheme === "light" ? "add" :remove]("light-theme");
});


      