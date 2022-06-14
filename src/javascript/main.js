import Drag from './functions/drag';
import Navigator from './functions/navigator';

$(function() {
    let Draggable = document.getElementById('drag');
    console.log(Draggable)
    let isLimited = true;
    Drag(Draggable, isLimited);
    Navigator();
});