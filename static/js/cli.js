var isMouseDown, initX, initY, height = draggable.offsetHeight = draggable.offsetWidth;




draggable.addEventListener('mousedown', function(e){
    isMouseDown = true;
    document.body.classList.add('no-select');
    initX = e.offsetX;
    initY = e.offsetY;
})