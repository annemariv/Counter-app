'use strict';

var count = 0;

window.onload = function() {
    alert('Vajuta nuppu, et suurendada/vähendada loendurit ühe võrra. Iga kümnes arv toob kaasa üllatuse!');
};

function changeCountNumber(num) {
    if (num === 0) {
        count = 0;
    } else {
        count += num;
        if (count < 0) {
            count = 0;
        }
    }

    document.getElementById('count').innerHTML = count;

}

document.querySelectorAll('.confetti-button').forEach(button => {addEventListener('click', () => {
        if (count % 10 === 0 && count !== 0) {
        confetti();
        }
    });
});
