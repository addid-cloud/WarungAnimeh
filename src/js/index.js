const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.getElementById('myNav')
const hero = document.getElementById('myHero')
const heroOffset = hero.offsetHeight
window.onscroll = function(){
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollPosition >= heroOffset){
        nav.classList.add("bg-sky-500")
        nav.classList.add("rounded")
        nav.classList.add("mt-2")
        nav.classList.remove("transparant")
    }else if(!mobileMenu.classList.contains('hidden')){
        nav.classList.add("transparant")
        nav.classList.remove("bg-sky-500")
    }
    else{
        nav.classList.remove("bg-sky-500")
        nav.classList.remove("mt-2")
        nav.classList.add("transparant")

    }
}
const klikCatalog =()=>{
    let bulet1 = document.getElementById("bulet1")
    let bulet2 = document.getElementById("bulet2")
    let bulet3 = document.getElementById("bulet3")
    let bulet4 = document.getElementById("bulet4")
    bulet1.classList.add("transition")
    bulet2.classList.add("transition")
    bulet3.classList.add("transition")
    bulet1.classList.add("bg-sky-500")
    bulet1.classList.remove("bg-white")
    setTimeout(function(){bulet2.classList.add("bg-sky-400")
    bulet2.classList.remove("bg-white")},200)
    setTimeout(function(){bulet3.classList.add("bg-sky-300")
    bulet3.classList.remove("bg-white")},500)
    setTimeout(function(){bulet4.classList.add("bg-sky-300")
    bulet4.classList.remove("bg-white")},900)
    setTimeout(function(){ location.href="./src/web/catalog/index.html"},1500)   
}
  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('md:hidden');
    menuBtn.classList.toggle('text-slate-950')
    if(nav.classList.contains('bg-sky-500')){
        nav.classList.toggle('bg-sky-500')
    }
  });   

  const openBtn = document.getElementById('openBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });