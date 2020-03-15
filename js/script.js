const time = 1000;
const step = 1;

function outNum(num, elem) {
    var el = document.querySelector('#' + elem);
    n = 0;
    var t = Math.round(time/(num/step));
    var interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        el.innerHTML = n;
    }, t);
};

outNum(1000, 'out')