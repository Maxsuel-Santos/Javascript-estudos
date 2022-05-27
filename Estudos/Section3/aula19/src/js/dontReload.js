const form = document.querySelector("form");

function dontReload() {
    form.addEventListener("submit", function getEventForm(event) {
        event.preventDefault();
    });
}
