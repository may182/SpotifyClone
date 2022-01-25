console.log("Welcome to spotify")
//Initialising variables

let index=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let PPButton=Array.from(document.getElementsByClassName('PPButton'));
let previous=document.getElementById('prev');
let masterSong=document.getElementById('masterSong');
let next=document.getElementById('forw');


let songs=[
    {songName:"SONG 1", filePath:"./songs/1.mp3", coverPath:"./covers/1.jpg"},
    {songName:"SONG 2", filePath:"./songs/2.mp3", coverPath:"./covers/2.jpg"},
    {songName:"SONG 3", filePath:"./songs/3.mp3", coverPath:"./covers/3.jpg"},
    {songName:"SONG 4", filePath:"./songs/4.mp3", coverPath:"./covers/4.jpg"},
    {songName:"SONG 5", filePath:"./songs/5.mp3", coverPath:"./covers/5.jpg"},
    {songName:"SONG 6", filePath:"./songs/6.mp3", coverPath:"./covers/6.jpg"},
    {songName:"SONG 7", filePath:"./songs/7.mp3", coverPath:"./covers/7.jpg"},
    {songName:"SONG 8", filePath:"./songs/8.mp3", coverPath:"./covers/8.jpg"},
    {songName:"SONG 9", filePath:"./songs/9.mp3", coverPath:"./covers/9.jpg"},
    {songName:"SONG 10", filePath:"./songs/10.mp3", coverPath:"./covers/10.jpg"},
]

songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
})

// audioElement.play();

//Handle play pause of songs
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        // console.log("Entered");
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});


//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    //Update Seelbar    
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

//Seek to user order
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})



//Handle play pause from bar

const makeAllPlays=()=>{
    PPButton.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

PPButton.forEach((element)=>{
    // console.log(element);
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        console.log(index);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        audioElement.src=`./songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        masterSong.innerText=songs[index].songName;
        gif.style.opacity=1;
        audioElement.play();
    })
});

previous.addEventListener('click',()=>{
    if(index<=0){
        index=9;
    }
    else{
        index-=1;
    }
    audioElement.src=`./songs/${index+1}.mp3`;
    audioElement.currentTime=0;
    masterSong.innerText=songs[index].songName;
    gif.style.opacity=1;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

next.addEventListener('click',()=>{
    if(index>=9){
        index=0;
    }
    else{
        index+=1;
    }
    
    audioElement.src=`./songs/${index+1}.mp3`;
    audioElement.currentTime=0;
    masterSong.innerText=songs[index].songName;
    gif.style.opacity=1;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


