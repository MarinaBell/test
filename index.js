


(function () {
    const playButton = document.querySelector('.play');
    const round = document.querySelector('.round');
    const overlay = document.querySelector('.video-overlay');

    playButton.addEventListener('click', () => {
        playButton.classList.add('play_hidden');
        round.classList.add('round_hidden');
        overlay.classList.add('video-overlay_hidden')
    });


    const plus = document.querySelector('.plus');
    const plusLine = document.querySelector('.plus-line');
    
    const plusContainer = document.querySelector('.plus-container');
    
    const plusContainer2 = document.querySelector('.plus-container2');
    const plusContainer3 = document.querySelector('.plus-container3');
    const plusContainer4 = document.querySelector('.plus-container4');
    const plusLine2 = document.querySelector('.plus-line2');
    const plusLine3 = document.querySelector('.plus-line3');
    const plusLine4 = document.querySelector('.plus-line4');
    const hideContainer1 = document.querySelector('.hide-container');

    const hideContainer2 = document.querySelector('.hide-container2');
    const hideContainer3 = document.querySelector('.hide-container3');
    const hideContainer4 = document.querySelector('.hide-container4');

    plusContainer.addEventListener('click', () => {
        plusLine.classList.toggle('plus-line_hidden');
        hideContainer1.classList.toggle('hide-container');
        hideContainer1.classList.toggle('hide-container_open');
    });

    plusContainer2.addEventListener('click', () => {
        plusLine2.classList.toggle('plus-line_hidden');
        hideContainer2.classList.toggle('hide-container2');
        hideContainer2.classList.toggle('hide-container_open');
    });

    plusContainer3.addEventListener('click', () => {
        plusLine3.classList.toggle('plus-line_hidden');
        hideContainer3.classList.toggle('hide-container3');
        hideContainer3.classList.toggle('hide-container_open');
    });

    plusContainer4.addEventListener('click', () => {
        plusLine4.classList.toggle('plus-line_hidden');
        hideContainer4.classList.toggle('hide-container4');
        hideContainer4.classList.toggle('hide-container_open');
    });

    // plusLine4.addEventListener('click', () => {
    //     plusLine4.classList.remove('plus-line_hidden');
    //     hideContainer4.classList.remove('hide-container_open');
    //     hideContainer4.classList.add('hide-container4');
        
    // });



    // plusLine.addEventListener('click', () => {
    //         plusLine.classList.remove('plus-line_hidden');
    // });

    // plus.addEventListener('click', () => {
    //     plusLine.classList.remove('plus-line_hidden');
    // });









}());