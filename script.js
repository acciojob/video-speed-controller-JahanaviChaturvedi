const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const playbackSpeedSlider = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const fastforwardButton = document.querySelector('.fastforward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
}
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}
function handleVolumeChange() {
  video.volume = volumeSlider.value;
}
function handlePlaybackSpeedChange() {
  video.playbackRate = playbackSpeedSlider.value;
}
function rewind() {
  video.currentTime -= 10;
}
function fastForward() {
  video.currentTime += 25;
}
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}
function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', handleVolumeChange);
playbackSpeedSlider.addEventListener('input', handlePlaybackSpeedChange);
rewindButton.addEventListener('click', rewind);
fastforwardButton.addEventListener('click', fastForward);
progress.addEventListener('click', scrub);
