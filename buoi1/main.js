document.getElementById("btn-bai1").onclick = () => {
  let luong = +document.getElementById("luong").value;
  let luongThat = 0;

  if (luong === 15e6) {
    luongThat += (luong * 30) / 100;
  } else if (luong >= 7e6 && luong <= 15e6) {
    luongThat += (luong * 20) / 100;
  } else if (luong < 7e6) {
    luongThat += (luong * 10) / 100;
  }

  document.getElementById("result1").innerHTML = luongThat;
};

document.getElementById("btn-bai2").onclick = () => {
  var month = +document.getElementById("thang1").value;
  var year = +document.getElementById("nam1").value;
  var result2 = document.getElementById("result2");

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result2.innerHTML = "tháng " + month + " có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result2.innerHTML = "tháng " + month + " có 30 ngày";
      break;

    case 2:
      if (
        (month === 2 && year % 400 === 0) ||
        (year % 4 === 0 && nam % 100 !== 0)
      ) {
        result2.innerHTML = "tháng " + month + " có 29 ngày";
      } else {
        result2.innerHTML = "tháng " + month + " có 28 ngày";
      }
  }
};

document.getElementById("btn-bai3").onclick = () => {
  let year = +document.getElementById("nam2").value;
  let result = document.getElementById("result3");

  let can = (year - 3) % 10;
  let chi = (year - 3) % 12;

  switch (can) {
    case 0:
      can = "Qúy ";
      break;

    case 1:
      can = "Giáp ";
      break;

    case 2:
      can = "Ất ";
      break;

    case 3:
      can = "Bính ";
      break;

    case 4:
      can = "Đinh ";
      break;

    case 5:
      can = "Mậu ";
      break;

    case 6:
      can = "Kỷ ";
      break;

    case 7:
      can = "Canh ";
      break;

    case 8:
      can = "Tân ";
      break;

    case 9:
      can = "Nhâm ";
      break;
  }

  switch (chi) {
    case 0:
      chi = "Hợi";
      break;

    case 1:
      chi = "Tý";
      break;

    case 2:
      chi = "Sửu ";
      break;

    case 3:
      chi = "Dần ";
      break;

    case 4:
      chi = "Mão ";
      break;

    case 5:
      chi = "Thìn ";
      break;

    case 6:
      chi = "Tỵ ";
      break;

    case 7:
      chi = "Ngọ ";
      break;

    case 8:
      chi = "Mùi ";
      break;

    case 9:
      chi = "Thân ";
      break;

    case 9:
      chi = "Dậu ";
      break;

    case 9:
      chi = "Tuất  ";
      break;
  }

  let namNl = can + chi;
  result.innerHTML = namNl;
};
