var anpha = [];
function baitap1() {
  //B1 : Dom tới value
  var number = +document.getElementById("txtNum").value;
  // B2 : push value vừa lấy vào mảng anpha
  anpha.push(number);
  anpha.sort(); // sắp xếp mảng theo thứ tự tăng dần
  // B3 :  Tính toán
  var sum1 = 0; // Tổng các số dương trong mảng
  // var count1 = 0; // đếm số dương trong mảng
  // var count2 = 0; // đếm số âm trong mảng
  var find1 = anpha[0]; // tìm số nhỏ nhất trong mảng
  var find2 = 99999; // tìm số dương nhỏ nhất trong mảng
  var find3 = anpha[0]; // tìm số chẵn cuối cùng trong mảng
  // B4 : duyệt mảng để xác định giá trị của từng phần tử bên trong
  for (var i = 0; i < anpha.length; i++) {
    // Tính tổng các số dương trong mảng
    if (anpha[i] > 0) {
      sum1 += anpha[i];
    }
    // // đếm các số dương trong mảng
    // if (anpha[i] > 0) {
    //   count1++;
    // }
    // // đếm số âm trong mảng
    // if (anpha[i] < 0) {
    //   count2++;
    // }
    // tìm số nhỏ nhất trong mảng
    if (anpha[i] < find1) {
      find1 = anpha[i];
    }
    // tìm số dương nhỏ nhất trong mảng
    if (anpha[i] < find2 && anpha[i] > 0) {
      find2 = anpha[i];
    }
    // tìm số chẵn cuối cùng trong mảng
    if (anpha[i] % 2 === 0 && anpha[i - 1]) {
      find3 = anpha[i];
    }
  }
  console.log(anpha);
  var divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML = `
    <p>tổng số dương trong mảng: ${sum1}</p>
    
    <p>tìm số nhỏ nhất trong mảng: ${find1}</p>
    <p>tìm số dương nhỏ nhất trong mảng: ${find2}</p>
    <p>tìm số chẵn cuối cùng trong mảng: ${find3}</p>
    <p>sắp xếp mảng theo thứ tự tăng dần: ${anpha}</p>
  `;
}

function baitap2() {
  var find4; // Đổi chỗ 2 giá trị trong mảng theo vị trí
  var numbera = +document.getElementById("txtNumb").value;
  var numberb = +document.getElementById("txtNumc").value;
  find4 = anpha[numbera];
  anpha[numbera] = anpha[numberb];
  anpha[numberb] = find4;
  var divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML = `
  <p>Đổi chỗ  giá trị trong mảng: ${numberb} ${numbera}</p>
    `;
  // console.log(anpha)
}
function baitap3(ketQua1) {
  // số nguyên tố đầu tiên trong mảng
  for (var i = 0; i < anpha.length; i++) {
    if (soNT(anpha[i]) === true) {
      break;
    }
  }
  var divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML = `
  <p>số nguyên tố đầu tiên: ${anpha[i]}</p>
    `;
}
function soNT(number) {
  // kiểm tra số nguyên tố
  if (number < 2) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function baitap4() {
  // tìm số nguyên trong mảng
  var ketQua2 = 0;
  for (var i = 0; i < anpha.length; i++) {
    if (Number.isInteger(anpha[i]) === true) {
      ketQua2++;
    }
  }
  var divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML = `
  <p>số nguyên trong mảng: ${ketQua2}</p>
    `;
}
function baitap5() {
  // so sánh số dương và âm
  var count1 = 0; // đếm số dương trong mảng
  var count2 = 0; // đếm số âm trong mảng
  for (var i = 0; i < anpha.length; i++) {
    // đếm các số dương trong mảng
    if (anpha[i] > 0) {
      count1++;
    }
    // đếm số âm trong mảng
    if (anpha[i] < 0) {
      count2++;
    }
  }
  if (count1 > count2) {
    var divResult = document.getElementById("result");
    divResult.style.display = "block";
    divResult.innerHTML = `
  <p>tổng số dương là ${count1} lớn hơn tổng số âm là ${count2}</p>
    `;
  } else if (count1 == count2) {
    var divResult = document.getElementById("result");
    divResult.style.display = "block";
    divResult.innerHTML = `
  <p>tổng số âm là ${count2} = tổng số dương là ${count2}</p>
  `;
  } else {
    var divResult = document.getElementById("result");
    divResult.style.display = "block";
    divResult.innerHTML = `
  <p>tổng số âm là ${count2} lớn hơn tổng số dương là ${count1}</p>
  `;
  }
}

