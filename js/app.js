import hamburguerMenu from "/js/hamburguerMenu.js";

const D = document;

D.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".nav__panel-btn", ".nav__menu-panel",".nav__menu-item a");
})


