document.addEventListener('DOMContentLoaded', () => {
    // Stress Quiz Form
    const quizForm = document.getElementById('stress-quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Quiz submitted. Your results will be displayed soon.');
        });
    }

    // Stress Diary Form
    const diaryForm = document.getElementById('stress-diary-form');
    if (diaryForm) {
        diaryForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const entry = document.getElementById('diary-entry').value;
            const date = new Date().toLocaleDateString();
            alert(`Diary entry for ${date}: ${entry}`);
        });
    }

    // Workshop Registration Form
    const registrationForm = document.getElementById('workshop-registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            alert(`Thank you, ${name}! You have registered for the workshop.`);
        });
    }

    // Stress Tracking Chart (Placeholder Example)
    // Implement the charting library and code if needed

});
