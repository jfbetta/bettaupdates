document.addEventListener('DOMContentLoaded', function() {
    const needle = document.getElementById('needle');
    const temperature = 25; // Ganti ini dengan nilai suhu Anda
    const minTemp = 0;
    const maxTemp = 50; // Sesuaikan rentang suhu maksimum

    const angle = (temperature - minTemp) / (maxTemp - minTemp) * 180 - 90;
    needle.style.transform = `rotate(${angle}deg)`;
});
