document.addEventListener('DOMContentLoaded', function() {
    const loaderSection = document.getElementById('loader-section');
    const mainContent = document.getElementById('main-content');
    const progressBar = document.querySelector('.loader-progress');

    let progress = 0;
    const interval = setInterval(function() {
        progress += 1;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            loaderSection.style.display = 'none';
            mainContent.style.display = 'block';
        }
    }, 20); //
});