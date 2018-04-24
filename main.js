setTimeout(function(){
    siteWelcome.classList.remove('active')
  },1000)
  
window.onscroll=function(xx) {
    if(window.scrollY>0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
}