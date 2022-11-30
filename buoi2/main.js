document.getElementById("btn-bai1").onmouseenter = () => {
  let number = +document.getElementById("Number").value;
  let result = document.getElementById("result1");

  function checkPrimeNumber(number) {
    var count = 0;
    for (let index = 2; index <= Math.sqrt(number); index++) {
      if (number % index === 0) {
        count++;
      }
    }
    if (count !== 0) {
      return false;
    } else {
      return true;
    }
  }

  if (checkPrimeNumber(number) === true) {
    document.getElementById("result11").innerHTML = `${number} là số nguyên tố`;
  } else {
    document.getElementById(
      "result11"
    ).innerHTML = `${number} không là số nguyên tố`;
  }

  if (number % 1 != 0) {
    result.innerHTML = `${number} là số thập phân`;
  } else if (number % 2 !== 0) {
    result.innerHTML = `${number} là số lẻ`;
  } else if (number % 2 === 0) {
    result.innerHTML = `${number} là số chẳn`;
  }
};

document.getElementById("btn-bai2").onclick = () => {
  let number = +document.getElementById("Number2").value;
  let result1 = document.getElementById("result2");
  let result2 = document.getElementById("result21");

  for (let index = 1; index <= number; index++) {
    result1.innerHTML += index + " ";
  }

  for (let index = number; index >= 1; index--) {
    result2.innerHTML += index + " ";
  }
};

document.getElementById("btn-bai3").addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    let numberInput = document.getElementById("number3").value;
    let result = document.getElementById("result3");
    var count = 0;
    for (let index = 1; index <= numberInput.length; index++) {
      count++;
    }
    result.innerHTML = "số nhập " + count;
  }
});
