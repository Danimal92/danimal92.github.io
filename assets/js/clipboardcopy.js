

const clipboardcopy = () => {
    navigator.clipboard.writeText('daniel.zaltsman92@gmail.com')
}

    const hideTooltip = () => {
        const tooltip = document.getElementById('tooltip')
        tooltip.style.display = 'none'
    }

    var element = document.getElementById('tooltip')
    var element2 = document.getElementById('tooltip2')
    
    function fade() {
        element.style.filter = 'inherit'
        element.style.opacity = 1;
        element.style.display = 'inline';
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.01;
        }, 8);
    }
    function fade2() {
        element2.style.display = 'none';
        element2.style.display = 'inline';
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element2.style.display = 'none';
            }
            element2.style.opacity = op;
            element2.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.01;
        }, 8);
    }

const tooltip = () => { 
    console.log("HELLOOOOOOO")
    const clickTooltip = document.getElementById('click-tooltip')
    const tooltip = document.getElementById('tooltip')
    const clickTooltip2 = document.getElementById('click-tooltip2')
    const tooltip2 = document.getElementById('tooltip2')
    clickTooltip.addEventListener('click', () => {
        console.log("HIT")
        fade()
    })
    clickTooltip2.addEventListener('click', () => {
        console.log("HIT")
        fade2()
    })
}

tooltip()