document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll('.modal');

    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };

    document.querySelectorAll('.close').forEach(span => {
        span.onclick = function() {
            this.parentElement.style.display = "none";
        };
    });
});
