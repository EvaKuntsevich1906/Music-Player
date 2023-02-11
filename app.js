const envelope = document.querySelector(`.envelope`);
const track_name = document.querySelector(`.track_name`);
const singer = document.querySelector(`.singer`);
const back = document.querySelector(`.back`);
const stop = document.querySelector(`.stop`);
const forward = document.querySelector(`.forward`);
const arrows = document.querySelector(`.arrows`);
const like = document.querySelector(`.like`);
const line = document.querySelector(`.line`);
const time = document.querySelector(`.time`)
const playlist = [{
        name: 'Diamonds',
        singer: 'Rihanna',
        path: './audio/rihanna.mp3',
        envelope: './image/rihanna.jpg'
    },
    {
        name: 'Cheap thrills',
        singer: 'Sia',
        path: './audio/sia.mp3',
        envelope: './image/sia.jpg'
    },
    {
        name: 'I want to...',
        singer: 'Queen',
        path: './audio/queen.mp3',
        envelope: './image/queen.jpg'
    },
    {
        name: 'Only time',
        singer: 'Enya',
        path: './audio/enya.mp3',
        envelope: './image/enya.jpg'
    },
    {
        name: 'Okean Drive',
        singer: 'Dumont',
        path: './audio/duke_dumont.mp3',
        envelope: './image/duke_dumont.jpg'
    },
    {
        name: 'Ride',
        singer: 'L.D.Rey',
        path: './audio/lana_del_rey.mp3',
        envelope: './image/lana_del_rey.jpg'
    },
    {
        name: 'Skyfall',
        singer: 'Adele',
        path: './audio/adele.mp3',
        envelope: './image/adele.jpg'
    },
    {
        name: 'Shape',
        singer: 'Sting',
        path: './audio/sting.mp3',
        envelope: './image/sting.jpeg'
    }];

let index = 0;
let arrowsflag = true;
let stopflag = true;

let likeflag = true;

const music = document.createElement('audio');
music.src = playlist[index].path;

let stoplike = () => {
    if (likeflag) {
        like.style = `background-image: url(./image/like.svg);`;
        likeflag = false;
    } else {
        like.style = `background-image: url(./image/blacklike.svg);`;
        likeflag = true;
    }
}

let stop_play = () => {
    if (stopflag) {
        stop.style = `background-image: url(./image/pause.svg);`
        music.play();
        stopflag = false;
    } else {
        stop.style = `background-image: url(./image/stop.svg);`
        music.pause();
        stopflag = true;
    }
}

let stoparrows = () => {
    if (arrowsflag) {
        arrows.style = `background-image: url(./image/having.png);
        width: 16px;
        height: 16px;
        background-size: cover;`;
        arrowsflag = false;
    } else {
        arrows.style = `background-image: url(./image/arrow.svg);`;
        arrowsflag = true;
    }
}

let updateProgress = (e) => {
    const {
        duration,
        currentTime
    } = e.target
    const progressParcent = (currentTime / duration) * 100
    line.style.width = `${progressParcent}%`;
}
music.addEventListener(`timeupdate`, updateProgress);
music.addEventListener("timeupdate", function () {
    let track_time = music.currentTime;
    let start = "0";
    let minuts = Math.floor(music.currentTime / 60);
    let seconds = Math.floor(music.currentTime - minuts * 60);
    seconds < 10 ? seconds = "0" + seconds : null;
    minuts > 10 ? start = "" : null;
    time.innerHTML = start + minuts + ":" + seconds;
});

back.addEventListener(`click`, () => {
    like.style = `background-image: url(./image/like.svg);`
    arrows.style = `background-image: url(./image/arrow.svg);`
    if (index === 0) null
    else {
        index -= 1
        track_name.innerHTML = playlist[index].name;
        singer.innerHTML = playlist[index].singer
        envelope.style = ` background-image: url(${playlist[index].envelope})`
        music.src = playlist[index].path || playlist[0].path;
        stopflag = true;
        stop_play()
    }
});

stop.addEventListener(`click`, () => {
    stop_play()

});

forward.addEventListener(`click`, () => {
    like.style = `background-image: url(./image/like.svg);`
    arrows.style = `background-image: url(./image/arrow.svg);`
    if (index === playlist.length) null
    else {
        index += 1
        track_name.innerHTML = playlist[index].name;
        singer.innerHTML = playlist[index].singer
        envelope.style = ` background-image: url(${playlist[index].envelope})`
        music.src = playlist[index].path;
        stopflag = true;
        stop_play()
    }
})

like.addEventListener(`click`, () => {
    stoplike();
})
like.addEventListener(`onclick`, () => {
    stoplike();
})

arrows.addEventListener(`click`, () => {
    stoparrows()
});
arrows.addEventListener(`onclick`, () => {
    stoparrows();
})