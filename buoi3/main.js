let arr = [];

function enterArray() {
  let numberIp = +document.getElementById("number").value;
  arr.push(numberIp);
  document.getElementById("result1").innerHTML = "Mảng: " + arr;
  evenNumberArray();
  oddNumberArray();
  document.getElementById("sum1").innerHTML = "Sum : " + sumNumberArray();
  document.getElementById("max1").innerHTML = "Max :" + maxNumberArray();
  primeNumberArray();
  colorArray(numberIp);
}

function evenNumberArray() {
  let even = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      even.push(arr[index]);
    }
  }
  document.getElementById("even1").innerHTML = "Số chẳn: " + even;
}

function oddNumberArray() {
  let odd = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 1) {
      odd.push(arr[index]);
    }
  }
  document.getElementById("odd1").innerHTML = "Số lẻ: " + odd;
}

function sumNumberArray() {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

function maxNumberArray() {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}

function primeNumberArray() {
  let prime = [];
  for (let index = 0; index < arr.length; index++) {
    if (chekPrime(arr[index])) {
      prime.push(arr[index]);
    }
  }
  document.getElementById("prime1").innerHTML = "Số nguyên tố: " + prime;
}

function chekPrime(number) {
  let count = 0;
  if (number < 2) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      count++;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

function colorArray(numberIp) {
  let text = numberIp.toString();
  let color = "";
  while (text.length < 6) {
    text = 0 + text;
  }
  color += "#" + text;

  document.getElementById("color1").innerHTML = color;
}

function createArray() {
  let number = +document.getElementById("number2").value;
  for (let index = 0; index < number; index++) {
    arr.push(Math.floor(Math.random() * 20));
  }
  document.getElementById("result2").innerHTML = "Mảng : " + arr;
  document.getElementById("result3").innerHTML = "Max :" + maxNumberArray();
  document.getElementById("result4").innerHTML = "Min: " + minNumberArray();
  document.getElementById("result5").innerHTML = "Tổng: " + sumNumberArray();
}

function minNumberArray() {
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return min;
}
