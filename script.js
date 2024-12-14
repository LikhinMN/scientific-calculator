
function toggleMenu() {
    const menu = document.getElementById('hamburger-nav');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function Showsidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
function Hidesidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='none';
}
const lightIcon = document.querySelector('.light-mode-icon');
const darkIcon = document.querySelector('.dark-mode-icon');
const body = document.body;
function enableLightMode() {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
    localStorage.setItem('theme', 'light');
}

function enableDarkMode() {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
    localStorage.setItem('theme', 'dark');
}
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}
loadTheme();
lightIcon.addEventListener('click', enableLightMode);
darkIcon.addEventListener('click', enableDarkMode);
