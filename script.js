// function printinfo(){
//     for (let i = 0; i < 50; i++) {
//         console.log(`Hi i am ${i}`)
//         console.log(`Hi i am {i+1}`)
//     }
// }
// printinfo();
// async function songfunc(){
//     let response = await fetch('http://127.0.0.1:5500/songs/')
//     let elems= await response.text();
//     let div=document.createElement('div');
//     div.innerHTML=elems;
//     let songs=[];
//     let names=div.getElementsByClassName('name');
//     for (let index = 0; index < names.length; index++) {
//         const songname = names[index];
//         if(songname.innerHTML.endsWith(".mp3")){
//             songs.push(songname.innerHTML);
//         }
//     }
//     console.log(songs[jo sa play krna hai])

// }
// songfunc();
async function getSongUrl(){
    let response = await fetch('http://127.0.0.1:5500/songs/');
    let temp= await response.text();
    let div=document.createElement('div');
    let songs=[];
    div.innerHTML=temp;
    let as=div.getElementsByTagName('a');
    for (let index = 0; index < as.length; index++) {
        const elements = as[index];
        if(elements.href.endsWith('.mp3')){
            songs.push(elements.href)
        }
        
    }
    return songs;
}
getSongUrl();

async function playfunc(){
    let songs=await getSongUrl();
    let playbutton=document.getElementById('play')
    playbutton.addEventListener('click',function(){
        let audio=new Audio(songs[5]);
    audio.play();
    })

}
playfunc();

async function insertsongname(){
    let songs= await getSongUrl();
    console.log(songs)
    let list=document.querySelector('.songlist')
    let listul=list.querySelector('ul')
    songs.forEach(song => {
    let decodedsongname=decodeURIComponent(song)

    let songname=decodedsongname.substring(decodedsongname.lastIndexOf('/') + 1);
       let [songname1,artistname]=songname.split("-")
    let addsongname = document.createElement('li');
    addsongname.innerHTML = `
                        <div>
                            <div>
                                <img src="/logo files/music.svg" alt="">
                            </div>
                            <div>
                                <div>${songname1}</div>
                                <div>${artistname}</div>
                            </div>
                        </div>
                            <div><img class=" invert" src="/logo files/playbuttongreen.svg" alt=""></div>
                        `;
    listul.appendChild(addsongname) 
    });
    
}
insertsongname();
