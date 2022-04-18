export default function hamburguerMenu(panelBtn, panel, menuLink) {
    const D = document;

    D.addEventListener("click", e => {//evento click
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {//si hace clic en el botón o el botón dentro del menú
            D.querySelector(panel).classList.toggle("is-active");//toggle para mostrar o esconder o menu
            D.querySelector(panelBtn).classList.toggle("is-active");
        }
if(e.target.matches(menuLink)){//si hace clic en un enlace del menú
    D.querySelector(panel).classList.remove("is-active");//esconder el menu
    D.querySelector(panelBtn).classList.remove("is-active");//esconder el botón
}

        });
}
