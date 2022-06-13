import Drag from './functions/drag';

$(function() {
    let Draggable = document.getElementById('drag');
    console.log(Draggable)
    let isLimited = true;
    Drag(Draggable, isLimited);
});