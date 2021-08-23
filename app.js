
let btn = document.querySelector('#btn');
let audio = document.querySelector('#audio');
let win = document.querySelector('.win');
let main = document.querySelector('.main');
let lose = document.querySelector('.lose');
let okBtn = document.querySelector('.ok__btn');
let alert = document.querySelector('.alert');
let image = document.querySelectorAll('.image');

let imgArrey = ['img/bobur.jpg', 'img/bekzod.jpg', 'img/rafiq.jpg', 'img/muxriddin.jpg','img/jobir.jpg']
let textArray = ['O\'xshamadi', 'Yana bir marta qani', 'Eeeeeeeehh', 'Etibor bilan qani', 'Odamga o\'xshab do\'stim']

okBtn.addEventListener('click',()=>{
    alert.style.transform = 'scale(0)'
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
        }else{
            lose.innerHTML = textArray[randomIndex()]
            audio.autoplay = true
            audio.src = 'img/boo.mp3'
            win.innerHTML = ''
            main.classList.add('mainLose')
        } 
        
    },2500)
    win.innerHTML = ''
    lose.innerHTML = ''

   

   
}
function randomIndex(){
    return Math.floor(Math.random() * imgArrey.length)
}