let open = document.getElementById('open');
let close = document.getElementById('close');
let menu = document.getElementById('menu');


open.onclick=function(){
     menu.classList.add('show')
}
close.onclick=function(){
    menu.classList.remove('show')
}


 
  

function showimg() {
    let x = [ 'gallery-1.jpg', 'gallery-2.jpg','events-1.jpg', 'gallery-3.jpg', 'gallery-1.jpg','events-4.jpg', 'gallery-4.jpg',
         'gallery-5.jpg','events-3.jpg', 'gallery-6.jpg', 'gallery-7.jpg', 'gallery-8.jpg','events-2.jpg'];
    let i = 0;

    function changeImage() {
        let img = document.getElementsByName('imgss')[0];
        img.src = x[i];
        i = (i + 1) % x.length;
    }

    setInterval(changeImage, 1000);
}

showimg();

 