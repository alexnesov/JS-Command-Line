var isMouseDown,initX,initY,height = draggable.offsetHeight,width = draggable.offsetWidth;

draggable.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  document.body.classList.add('no-select');
  initX = e.offsetX;
  initY = e.offsetY;
})

document.addEventListener('mousemove', function(e) {
  if (isMouseDown) {
    var cx = e.clientX - initX,
        cy = e.clientY - initY;
    if (cx < 0) {
      cx = 0;
    }
    if (cy < 0) {
      cy = 0;
    }
    if (window.innerWidth - e.clientX + initX < width) {
      cx = window.innerWidth - width;
    }
    if (e.clientY > window.innerHeight - height+ initY) {
      cy = window.innerHeight - height;
    }
    draggable.style.left = cx + 'px';
    draggable.style.top = cy + 'px';
  }
})

draggable.addEventListener('mouseup', function() {
  isMouseDown = false;
  document.body.classList.remove('no-select');
})

class Terminal{
    constructor() {
        this.activateEnter();
    }

    handleKeyUp(e){

    }

    activateEnter(){

        input_terminal.addEventListener("keypress", function(event){
            if(event.key === "Enter") {
                console.log("Enter pressed");

                var lineBreak = document.createElement("br");
                terminal_content.append("user@gts-systems > " + input_terminal.value);
                terminal_content.appendChild(lineBreak);
            }
        });     
    }
}


var terminal_content    = document.getElementsByClassName("terminal_content")[0];
var input_terminal      = document.getElementsByClassName("input_terminal")[0];

let inst_t              = new Terminal(input_terminal);