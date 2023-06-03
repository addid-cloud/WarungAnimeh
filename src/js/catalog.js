const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.getElementById('myNav')

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('md:hidden');
    menuBtn.classList.toggle('text-slate-950')
    if(nav.classList.contains('bg-sky-500')){
        nav.classList.toggle('bg-sky-500')
    }
  });   
