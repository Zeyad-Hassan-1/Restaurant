const changeMode = document.querySelector('.night');
const root = document.documentElement;
let initstate = 'light';

changeMode.addEventListener('click',()=>{
    if (initstate == 'light') {
        root.style.setProperty('--mainText','#EEEEEE')
        root.style.setProperty('--background','#222831')
        root.style.setProperty('--background2','#222831')
        root.style.setProperty('--logoColor','#76ABAE')
        root.style.setProperty('--button','#76ABAE')
        root.style.setProperty('--buttonHover','#31363F')
        root.style.setProperty('--menubutt','#31363F')
        root.style.setProperty('--menubutthov','#222831')
        root.style.setProperty('--cardbackground','#76ABAE55')
        root.style.setProperty('--cardbackgroundHover','#76ABAE')
        root.style.setProperty('--smallText','#ffffffe4')
        initstate = 'night';
    }
    else{
        root.style.setProperty('--mainText','#101A24')
        root.style.setProperty('--background','#FFFFFF')
        root.style.setProperty('--background2','#F3F4F4')
        root.style.setProperty('--logoColor','#EA6D27')
        root.style.setProperty('--button','#EA6D27')
        root.style.setProperty('--buttonHover','#883c11')
        root.style.setProperty('--menubutt','#101A24')
        root.style.setProperty('--menubutthov','#000000')
        root.style.setProperty('--cardbackground','#ffffff55')
        root.style.setProperty('--cardbackgroundHover','#FFFFFF')
        root.style.setProperty('--smallText','##5C6574')
        initstate = 'light'
    }
})