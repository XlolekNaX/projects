let pageTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Wróć tu spowrotem!";
});

window.addEventListener("focus", () => {
    document.title = pageTitle;
});