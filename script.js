console.log("Welcome to Music Player");

let play = document.getElementById('play');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let seek = document.getElementById('seekbar');
let progress = 0;
let songindex = 0;
let song = [
    { songname: "Faded", artistname: "Alan Walker", filepath: "faded.mp3", coverPath: "faded.jpg"}, 
    { songname: "Pal Pal Dil ke Paas", artistname: "Arijit Singh", filepath: "Pal Pal Dil Ke Paas.mp3", coverPath: "pal pal dil ke paas.jpeg"}, 
    { songname: "Boba Tunnel", artistname: "Anupam Roy", filepath: "Boba tunnel.mp3", coverPath: "boba tunnel.jpeg"}, 
    { songname: "Benche Thakar Gaan", artistname: "Fossils band", filepath: "Benche Thakar Gaan.mp3", coverPath: "Benche Thakar Gaan.jpeg"}, 
    { songname: "Bojhena se Bojhena", artistname: "Arijit Singh", filepath: "Bojhena se Bojhena.mp3", coverPath: "Bojhena se Bojhena.jpeg"}, 
    { songname: "Love me like you do", artistname: "Elle Goulding", filepath: "Love me like you do.mp3", coverPath: "Love me like you do.jpeg"}, 
    { songname: "Let me down slowly", artistname: "Alec Benjamin", filepath: "Let me down slowly.mp3", coverPath: "Let me down slowly.jpeg"}, 
    { songname: "Pee Loon", artistname: "Mohit Chauhan", filepath: "PEE LOON.mp3", coverPath: "pee loon.jpg"}, 
    { songname: "Phir aur kya chahiye", artistname: "Arijit Singh", filepath: "Phir aur kya chahiye.mp3", coverPath: "Phir aur kya chahiye.jpg"},
    { songname: "Ae Dil hai Mushkil", artistname: "Arijit Singh", filepath: "Ae dil hai mushkil.mp3", coverPath: "Ae dil hai mushkil.jpg"}, 
]
let noofsong = song.length;
let audioElement = new Audio('faded.mp3');

play.addEventListener('click' , ()=>{
    if( audioElement.paused || audioElement.currentTime==0)
    {
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
    else
    {
        audioElement.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate', seekupdate);
function seekupdate(){
    progress = Math.round(audioElement.currentTime/audioElement.duration*100);
    seek.value = progress;
    let minute = Math.floor(audioElement.currentTime/60);
    let second = Math.floor(audioElement.currentTime%60);
    if(second==60) {
        minute += 1;
        second = 0;
    }
    if (second<10) {
    document.getElementById('timedisplay').innerHTML = `-- ${minute} : 0${second} --`;
    }
    else
    document.getElementById('timedisplay').innerHTML = `-- ${minute} : ${second} --`;
    if(progress==100)
    {
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        seek.value = 0;
        audioElement.pause();
        if(songindex==(noofsong-1))
            songindex=0;
        else
        songindex += 1;
        audioElement = new Audio(song[songindex].filepath);
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        audioElement.addEventListener('timeupdate', seekupdate);
        mainbannerupdate();
    }
}

seek.addEventListener('change', ()=>{
    audioElement.currentTime = seek.value*audioElement.duration/100;
})

Array.from(document.getElementsByClassName('song-banner')).forEach(bannerplay);
        function bannerplay(element){
        element.addEventListener('click', bannerfunc);
}
function bannerfunc(e)
    {
        songindex = parseInt(e.target.id)-1;
        console.log(parseInt(e.target.id));
        audioElement.pause();
        audioElement = new Audio(song[songindex].filepath);
        audioElement.currentTime = 0;
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        audioElement.addEventListener('timeupdate', seekupdate);
        mainbannerupdate();
    }
    function mainbannerupdate() {
        document.getElementById('mainname').innerHTML=song[songindex].songname;
        document.getElementById('mainsinger').innerHTML=song[songindex].artistname;
        document.getElementById('banner').src=song[songindex].coverPath;
        console.clear();
    }

forward.addEventListener('click', ()=>{
    audioElement.pause();
    audioElement.currentTime = 0;
    if (songindex==(noofsong-1))
    songindex = 0;
    else
    songindex += 1;
    audioElement = new Audio(song[songindex].filepath);
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    audioElement.addEventListener('timeupdate',seekupdate);
    mainbannerupdate();
})

backward.addEventListener('click', ()=>{
    audioElement.pause();
    audioElement.currentTime = 0;
    if (songindex==0)
    songindex = noofsong-1;
    else
    songindex -= 1;
    audioElement = new Audio(song[songindex].filepath);
    console.log(song[songindex].filepath);
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    audioElement.addEventListener('timeupdate',seekupdate);
    mainbannerupdate();
})
console.log(song);
let addsong = document.getElementById('addsong');
addsong.addEventListener('click',newsong);
function newsong() {
    let name = prompt("Enter the name of the song");
    let artist = prompt("Enter the name of the artist");
    let path = prompt("Enter the file path: local path or direct drive link");
    let temp = confirm("Do you want to enter the cover path?");
    let cover;
    if (temp==true) {
        cover = prompt("Enter the cover path: local path or direct drive link");
    }
    else
    cover = "";
    song.push({songname: `${name}`, artistname: `${artist}`, filepath: `${path}`, coverpath: `${cover}`});
    noofsong = song.length;
    console.log(song);
    console.log(noofsong);
}
