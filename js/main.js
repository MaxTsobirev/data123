const countdown = document.querySelector('.countdown');

//Launch Date
const launchDate = new Date('Jul 6, 2022 2:00:00').getTime();

//Update every second
const intvl = setInterval(() => {
    //get date and time
    const now = new Date().getTime();

    //distance from now to launch
    const distance = launchDate - now;

    //time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60 ));
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${min}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;
    //lauch passed
    if(distance < 0) {
        //stop countdown
        clearInterval(intvl);
        //style and output text
        countdown.getElementsByClassName.color = '#17a2b8';
        countdown.innerHTML = "Launched!";
    }
},1000);