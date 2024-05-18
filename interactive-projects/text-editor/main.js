function makeBold() {
    document.getElementById("text-box").style["font-weight"] = "bolder";
}


function makeItalic() {
    document.getElementById("text-box").style["font-style"] = "italic"
}


function changeColor() {
    document.getElementById('text-box').style.color = document.getElementById('text-clr').value;
}


function makeUnderline() {
    document.getElementById("text-box").style["text-decoration"] = "underline"
}


function makeUppercase() {
    document.getElementById("text-box").style["text-transform"] = "uppercase"
}



function makeLowercase() {
    document.getElementById("text-box").style["text-transform"] = "lowercase"
}




function changeSize() {
    document.getElementById('text-box').style.fontSize = document.getElementById('font-size').value + 'px';
}