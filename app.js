
let btn = document.querySelector('#btn');
let clear = document.querySelector('#clear');
let showAlert = document.querySelector('#showAlert');
let audio = document.querySelector('#audio');
let menu = document.querySelector('#menu');
let win = document.querySelector('.win');
let main = document.querySelector('.main');
let lose = document.querySelector('.lose');
let okBtn = document.querySelector('.ok__btn');
let loseCount = document.querySelector('.lose__count');
let winCount = document.querySelector('.win__count');
let alert = document.querySelector('.alert');
let menuPanelConatiner = document.querySelector('.menu__panelConatiner');
let image = document.querySelectorAll('.image');

let imgArrey = ['img/bobur.jpg', 'img/bekzod.jpg', 'img/rafiq.jpg', 'img/muxriddin.jpg','img/jobir.jpg']
let textArray = ['O\'xshamadi', 'Yana bir marta qani', 'Eeeeeeeehh', 'Etibor bilan qani', 'Odamga o\'xshab do\'stim']


clear.addEventListener('click',() =>{
    localStorage.setItem('win', String(0))
    localStorage.setItem('lose', String(0))
    loseCount.innerHTML = localStorage.getItem('lose')
    winCount.innerHTML = localStorage.getItem('win')
    location.reload();
    
})
    loseCount.innerHTML = localStorage.getItem('lose')
    winCount.innerHTML = localStorage.getItem('win')
    console.log(localStorage.getItem('lose'));

let lCount =Number(localStorage.getItem('lose')) + 0;
let wCount =Number(localStorage.getItem('win')) + 0;



okBtn.addEventListener('click',()=>{
    alert.style.transform = 'scale(0)'
})
showAlert.addEventListener('click',()=>{
    alert.style.transform = 'scale(1)'
})

menu.addEventListener('click',()=>{
    menuPanelConatiner.style.display = 'block'
})

menuPanelConatiner.addEventListener('click',()=>{
    menuPanelConatiner.style.display = 'none'
})




btn.addEventListener('click', randomImg);

function randomImg(){
    
    btn.style.display = 'none'
    
    audio.autoplay = true
    audio.src = 'img/wrong.mp3'
    main.classList.remove('mainLose')
    main.classList.remove('mainWin')
    let interval = setInterval(()=>{
        image[0].src = imgArrey[randomIndex()]
        image[1].src = imgArrey[randomIndex()]
        image[2].src = imgArrey[randomIndex()]
    
    },100)
 
    setTimeout(()=>{
        btn.style.display = 'inline'
        clearInterval(interval)
        if(image[0].src === image[1].src && image[1].src === image[2].src){
            win.innerHTML = 'congratulations'
            audio.autoplay = true
            audio.src = 'img/victory.mp3'
            lose.innerHTML = ''
            main.classList.add('mainWin')
            winCount.innerHTML = wCount+=1
            localStorage.setItem('win', String(wCount))

        }else{
            lose.innerHTML = textArray[randomIndex()]
            audio.autoplay = true
            audio.src = 'img/boo.mp3'
            win.innerHTML = ''
            main.classList.add('mainLose')
            loseCount.innerHTML = lCount+=1
            localStorage.setItem('lose', String(lCount))
            
        } 
    },2500)
    win.innerHTML = ''
    lose.innerHTML = ''

}
function randomIndex(){
    return Math.floor(Math.random() * imgArrey.length)
}
