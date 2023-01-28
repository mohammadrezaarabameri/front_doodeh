localStorage.setItem('activePage', String(location.pathname)); 
let currPath = localStorage.getItem('activePage');
const navMenu = document.getElementById("nav");
const navItems = navMenu.getElementsByClassName("nav-link");

for (var i = 0; i < navItems.length; i++) {
    if (String(navItems[i].getAttribute('href')).replace('.', '') == currPath.trim()) {
        console.log('checked')
        if (!navItems[i].classList.contains('active'))
        navItems[i].classList.add('active')
    } else {
        if (navItems[i].classList.contains('active')) {
            navItems[i].classList.remove('active')
        }
    }
    }
