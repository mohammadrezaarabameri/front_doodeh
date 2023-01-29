localStorage.setItem('activePage', String(location.pathname)); 
let currPath = localStorage.getItem('activePage');
let pageIndex = localStorage.getItem('pageIndex');

if (pageIndex == null) {
    localStorage.setItem('pageIndex', 0)
}

const navMenu = document.getElementById("nav");
const navItems = navMenu.getElementsByClassName("nav-link");

let carvoutNames = (str='') => str.replace('./', '').replace('/', '')

for (var i = 0; i < navItems.length; i++) {
    
    navItems[i].setAttribute('onclick', `localStorage.setItem("pageIndex", ${i})`)
    navItems[i].setAttribute('page-index', i)

    if ( currPath.includes(carvoutNames( String(navItems[i].getAttribute('href')) )) ) {
        if (!navItems[i].classList.contains('active') && navItems[i].getAttribute('page-index') == pageIndex)
        navItems[i].classList.add('active')
        localStorage.setItem('pageName', String(navItems[i].textContent).trim());
    } else {
        if (navItems[i].classList.contains('active')) {
            navItems[i].classList.remove('active')
        }
    }
    }
