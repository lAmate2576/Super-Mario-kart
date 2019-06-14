var loading = document.getElementById('loading')
var loadingBarMask = document.getElementById('loadingBarMask')
var loadingBar = document.getElementById('loadingBar')
var loadingBarIndex = -1
var loadingBarTimeid = setInterval(function () {
    loadingBarIndex++
    loadingBar.style.width = 'calc(' + loadingBarIndex + '% - 4px)'
}, 100)
var loadingTimeId = setTimeout(function () {
    window.onload = function () {
        loading.parentNode.removeChild(loading)
    }
}, 10000)