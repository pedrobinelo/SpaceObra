function menuOnClick() {
    document.getElementById("menu").classList.toggle("change-menu-bg"); 
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    // document.getElementById("menu-bg").classList.toggle("change-bg");
}

function centerMenu() {
    const header = document.querySelector('header');
    const menu = document.getElementById('menu');
    const headerHeight = header.offsetHeight;
    const menuHeight = menu.offsetHeight;
    const topPosition = ((headerHeight - menuHeight) / 2) - 5;
    menu.style.top = `${topPosition}px`;
}

// Chame a função quando a página carregar
window.onload = centerMenu;

// Chame a função quando a janela for redimensionada
window.onresize = centerMenu;