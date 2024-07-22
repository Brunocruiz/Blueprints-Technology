// FEEDBACK
document.addEventListener('DOMContentLoaded', function() {
    const feedbacks = document.querySelectorAll('.div-feedback');
    let currentFeedbackIndex = 0;

    function showFeedback(index) {
        feedbacks.forEach((feedback, idx) => {
            if (idx === index) {
                feedback.classList.add('current-feedback');
            } else {
                feedback.classList.remove('current-feedback');
            }
        });
    }

    function nextFeedback() {
        currentFeedbackIndex++;
        if (currentFeedbackIndex >= feedbacks.length) {
            currentFeedbackIndex = 0;
        }
        showFeedback(currentFeedbackIndex);
    }

    function prevFeedback() {
        currentFeedbackIndex--;
        if (currentFeedbackIndex < 0) {
            currentFeedbackIndex = feedbacks.length - 1;
        }
        showFeedback(currentFeedbackIndex);
    }

    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', nextFeedback);
    prevButton.addEventListener('click', prevFeedback);
});

// OUTDOOR 
var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
