let img=document.getElementById('ball')[0];
img.onmouseover=function(){
    img.src='img/dc1.png';
    img.onmouseout=function(){
        img.src='img/fc.png';
    }
}