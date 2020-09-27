"use strict";
// Here the stop button is activated;
const startBtn = document.querySelector('#press');

startBtn.addEventListener('click', () => {

  const initialValue = 1;
  let counter1 = document.querySelector('#minute');
  let counter2 = document.querySelector('#second');
  let counterValue = Number(counter1.value)*60 + Number(counter2.value) + initialValue;

  const timer = setInterval(() => {
    counterValue -= 1;
    const timeLeft = document.querySelector('#timer');
    timeLeft.textContent = counterValue;
  
    // if (counterValue < 0) {
    //   const alert = document.querySelector('#timer');
    //   alert.textContent = "Inserted time is invalid";
    //   clearInterval(timer);
    // } 
  
    if (counterValue == 0) {
      clearInterval(timer);
      timeLeft.textContent = "";
  
      const alert = document.querySelector('#alert');
      alert.textContent = "RINGGGGGGGG";
      alert.className = "alert-div";
  
      const reset = setInterval(() => {
        const backTo0 = document.querySelector('#alert');
        backTo0.textContent = "";
      }, 2000);
  
    }
  
  }, 1000);

  const stopBtn = document.querySelector('#stop');
  stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  });  

});



