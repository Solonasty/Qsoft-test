'use strict'

let mediaQuery = '(max-width: 769px)';
let mediaQueryList = window.matchMedia(mediaQuery);

// If window size under < 769px and > 600px function changeAmountOfCard() applies
if (screen.width < 769 && screen.width > 600) {
    changeAmountOfCard();
}

// If user change window size and meet mediaQuery - listener applies function changeAmountOfCard();
mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    changeAmountOfCard();
  }
})

// This function change anount of 'card' in 'partners__row' container if screen width

function  changeAmountOfCard() {

    let flex = document.querySelector('.partners__flex');
    let one = document.querySelector('.partners__row_one');
    let two = document.querySelector('.partners__row_two');

    let oneLast = one.lastElementChild; // last card in first row
    let twoLast = two.lastElementChild; // last card in second row

    let three = one.cloneNode(false);  // create thrid empty row

        three.classList.add('partners__row_three');
        three.classList.remove('partners__row_one');
        flex.append(three);

        two.prepend(oneLast);
        three.prepend(twoLast);
        let twoLastLast = two.lastElementChild; // one more last card in second row
        three.prepend(twoLastLast);
}


