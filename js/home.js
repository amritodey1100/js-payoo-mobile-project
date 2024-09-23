// console.log('home added')

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyinput = document.getElementById('input-add-money').value;
    
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber)

  });
