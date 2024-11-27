document.addEventListener("DOMContentLoaded", function() {
    var modals = document.querySelectorAll('.modal');
    var thumbnails = document.querySelectorAll('.thumbnail');
    var modalImg = document.querySelectorAll(".modal-content");
    var spans = document.querySelectorAll('.close');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function() {
            var targetModal = document.querySelector(this.getAttribute('data-modal-target'));
            var modalImg = targetModal.querySelector('.modal-content');
            var imgSrc = this.querySelector('img').src.replace('thumbnail', 'fullsize');
            modalImg.src = imgSrc;
            targetModal.style.display = "block";
        };
    });

    spans.forEach(function(span) {
        span.onclick = function() {
            this.parentElement.style.display = "none";
        };
    });

    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    };
});
