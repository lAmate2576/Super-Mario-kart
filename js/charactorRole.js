var charaList = document.querySelector('#charaList')
var charaList_a = charaList.getElementsByTagName('a')
for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 7; i++) {
        charaList_a[i + j * 7].style.backgroundPositionX = -10 - 126 * i + "px"
        charaList_a[i + j * 7].style.backgroundPositionY = -6 - 127 * j + "px"
    }
}
