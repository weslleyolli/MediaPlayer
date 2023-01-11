const btnPlay = document.querySelectorAll('.button-play');
const btnPause = document.querySelectorAll('.button-pause');
const music = document.querySelector('#play-music');
const progressBar1 = document.querySelector('.bar-play-1');
const progressBar2 = document.querySelector('.bar-play-2');
const timeNumber = document.querySelectorAll('.time-start-player');


let statusPlay = "?";

playMusic = () => {
    for (let count = 0; count < btnPlay.length; count ++) {
        btnPlay[count].addEventListener('click', () => {
            let count = 0;
            while (count < btnPlay.length) {
                btnPlay[count].classList.add('hide');
                btnPause[count].classList.remove('hide');
                count++;
            }
            music.play();
            statusPlay = "play";
        })
    }
}

pauseMusic = () => {
    for (let count = 0; count < btnPlay.length; count ++) {
        btnPause[count].addEventListener('click', () => {
            let count = 0;
            while (count < btnPause.length) {
                btnPause[count].classList.add('hide');
                btnPlay[count].classList.remove('hide');
                count++;
            }
            music.pause();
            statusPlay = "pause";
        })
    }
}

progressBar = () => {
    let timeMusic = Math.floor(music.currentTime);
    let time = 0;
    let time2 = 0;
    setInterval(moveBar = () => {
        if (statusPlay == "play" && 
            time <= 220 &&
            time2 <= 350) {
        time += timeMusic + 2;
        progressBar1.style.width = time + 'px';
        time2 += timeMusic + 3.24;
        progressBar2.style.width = time2 + 'px';
    }
    else {
        console.log('pause');
    }
    },1000)
}

showTimeNumber = () => {
    let timeMusic = music.currentTime;
    let time = 0;
    setInterval(modifyNumber = () => {
        if (statusPlay == "play" && 
            time <= 200) {
        time += timeMusic;
        for (count = 0; count < timeNumber.length; count++) {
            timeNumber[count].innerHTML = Math.floor(music.currentTime).toString().padStart(4, '0' + ':');
        }
        }
    },1000)
}


//EXECUTE
playMusic();
pauseMusic();
progressBar();
showTimeNumber();