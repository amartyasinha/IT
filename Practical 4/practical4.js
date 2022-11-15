function table(n) {
    var myString = ""
    for (var i=1; i <= 10; i++){
        myString = myString + (n * i) + "	"
    }
    return myString
}

function colorChange() {
    var letter = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i <= 5; i++){
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color
}

var n = 2;
var font = 20;

var id = setInterval(function () {
    if (n <= 10) {
        var p = document.createElement("p")
        p.innerHTML = table(n)
        p.style.color = colorChange()
        p.style.fontSize = font + "px"
        document.body.appendChild(p)
        n++
        font = font + 5
    } else {clearInterval(id)}
}, 5000)