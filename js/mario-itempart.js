var charaList2 = document.querySelector('#charaList2')
var a = charaList2.getElementsByTagName('a')
for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 6; i++) {
        if((i + j * 6)==23){
            break;
        }
        a[i + j * 6].style.backgroundPositionX = -8 - 150 * i + "px"
        a[i + j * 6].style.backgroundPositionY = -11 - 148 * j + "px"
    }
}
