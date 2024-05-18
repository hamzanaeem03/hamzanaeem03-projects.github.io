let count = 0;
document.getElementById('dec-btn').onclick = function () {
    count -= 1;
    document.getElementById('countLabel').innerHTML = count;
}


document.getElementById('reset-btn').onclick = function () {
    count = 0;
    document.getElementById('countLabel').innerHTML = count;

}

document.getElementById('inc-btn').onclick = function () {
    count += 1;

    document.getElementById('countLabel').innerHTML = count;

    updateCounter()
}




function updateCounter() {
    let counterLabel = document.getElementById('countLabel');
    counterLabel.innerHTML = count;
    if (count % 2 === 0) {
        counterLabel.style.color = 'green';
    } else {
        counterLabel.style.color = 'red';
    }
}





function genrateHistory(){
    var time = getlocaltime()
    console.log(time)
}


