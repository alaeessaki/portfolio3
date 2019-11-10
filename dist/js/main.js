var links = document.querySelectorAll(".navs-item");
var active_link;
links.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("active");
        active_link = element;
        links.forEach(element => {
            if (element != active_link) {
                element.classList.remove("active");
            }
        })
    });
});