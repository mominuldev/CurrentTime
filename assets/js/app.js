
const hour = document.getElementById('hour');
const minit = document.getElementById('minit');
const second = document.getElementById('sec');
const progress = document.getElementById('progress');
const ampmformat = document.getElementById('ampm');

function curentTime() {
    let date = new Date();
    let hr = date.getHours()
    let mn = date.getMinutes()
    let sec = date.getSeconds()


    var ampm = hr >= 12 ? 'pm' : 'am';
    hours = hr % 12;
    hours = hours ? hours : 12;

    hour.textContent = hours;
    minit.textContent = mn;
    second.textContent = sec;
    ampmformat.textContent = ampm;

    progress.style.width = (sec / 60) * 100 + '%';
}

setInterval(curentTime, 1000);
