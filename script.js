const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", () => {

    event.preventDefault();

    const dropdownMenu = document.querySelector("#dropdown > .menu");
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");
});

const order = document.querySelector(".order");

order.addEventListener("click", () => {

    event.preventDefault();
});

const cancel = document.querySelector(".cancel");

cancel.addEventListener("click", () => {

    event.preventDefault();
});