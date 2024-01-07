document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const seekBar = document.getElementById("seekBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    playPauseBtn.addEventListener("click", togglePlayPause);
    seekBar.addEventListener("input", updateSeekBar);

    audioPlayer.addEventListener("timeupdate", updateSeekBar);

    function togglePlayPause() {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play();
            playPauseBtn.innerHTML = "&#10074;&#10074;"; // Pause symbol
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = "&#9658;"; // Play symbol
        }
    }

    function updateSeekBar() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;

        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);

        if (duration > 0) {
            const progress = (currentTime / duration) * 100;
            seekBar.value = progress;
        }
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});
