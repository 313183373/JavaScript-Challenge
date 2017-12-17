let buttonList = document.querySelectorAll('.timer__button');
let timeLeft = document.querySelector('.display__time-left');
let endTime = document.querySelector(".display__end-time");
let falg = false;
let min, sec;
let interval;

let input = document.querySelector('input');
let form = document.querySelector('#custom')

buttonList.forEach(value => {
    value.onclick = function (e) {
        min = Math.floor(this.dataset.time / 60);
        sec = this.dataset.time % 60;
        let text = min + ":" + (sec + "").padStart(2, '0');
        timeLeft.innerText = text;

        let now = new Date();
        now.setMinutes(now.getMinutes() + min);
        now.setSeconds(now.getSeconds() + sec);
        endTime.innerText = 'Be Back At ' + now.getHours() + ':' + (now.getMinutes() + "").padStart(2, '0');

        clearInterval(interval);
        interval = setInterval(function () {
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(interval);
                } else {
                    min--;
                    sec = 59;
                }
            } else {
                sec--;
            }
            let text = min + ":" + (sec + "").padStart(2, '0');
            timeLeft.innerText = text;
        }, 1000);
    }
});

custom.onsubmit = function (e) {
    if (input.value.trim()) {
        if (!isNaN(input.value.trim())) {
            sec = 0;
            min = Number(input.value.trim());
            let text = min + ":" + (sec + "").padStart(2, '0');
            timeLeft.innerText = text;

            let now = new Date();
            now.setMinutes(now.getMinutes() + min);
            now.setSeconds(now.getSeconds() + sec);
            endTime.innerText = 'Be Back At ' + now.getHours() + ':' + (now.getMinutes() + "").padStart(2, '0');

            clearInterval(interval);
            interval = setInterval(function () {
                if (sec === 0) {
                    if (min === 0) {
                        clearInterval(interval);
                    } else {
                        min--;
                        sec = 59;
                    }
                } else {
                    sec--;
                }
                let text = min + ":" + (sec + "").padStart(2, '0');
                timeLeft.innerText = text;
            }, 1000);
        }
    }
    return false;
}