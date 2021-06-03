window.addEventListener("scroll",function(){
if(window.pageYOffset > 70){
   document.querySelector(".navbar").classList.add("nav-bg") ;
}else {
    document.querySelector(".navbar").classList.remove("nav-bg") ;
}
}) ;