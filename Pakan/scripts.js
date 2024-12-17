document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress-bar');
    const timeDisplay = document.getElementById('time');
    const duration = 60 * 240; // Durasi countdown dalam detik (misalnya 5 menit)
    let remainingTime = duration;

    function updateProgress() {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        timeDisplay.textContent = 
        `${hours < 10 ? '0' : ''}${hours}:` + 
        `${minutes < 10 ? '0' : ''}${minutes}:` + 
        `${seconds < 10 ? '0' : ''}${seconds}`        
        const progressPercent = (remainingTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        if (remainingTime > 0) {
            remainingTime--;
            setTimeout(updateProgress, 1000);
        }
    }

    updateProgress();
});
