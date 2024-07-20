document.getElementsByTagName("h1")[0].style.fontSize = "6vw";const result1 = document.getElementById('result-1');
const result2 = document.getElementById('result-2');
const result3 = document.getElementById('result-3');
const result4 = document.getElementById('result-4');
const randomButton = document.getElementById('random-button');
const resetButton = document.getElementById('reset-button');

// ฟังก์ชันสุ่มตัวเลข
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ฟังก์ชันสุ่มเลขสลากกินแบ่ง
function generateLotteryNumber() {
  // สุ่มเลขรางวัลที่ 1 (6 ตัว)
  let lottery1 = '';
  for (let i = 0; i < 6; i++) {
    lottery1 += generateRandomNumber(0, 9);
  }
  result1.textContent = lottery1;

  // สุ่มเลขหน้า 3 ตัว (2 ชุด)
  let lottery2 = [];
  for (let i = 0; i < 2; i++) {
    let num = '';
    for (let j = 0; j < 3; j++) {
      num += generateRandomNumber(0, 9);
    }
    lottery2.push(num);
  }
  result2.textContent = lottery2.join(', ');

  // สุ่มเลขท้าย 3 ตัว (2 ชุด)
  let lottery3 = [];
  for (let i = 0; i < 2; i++) {
    let num = '';
    for (let j = 0; j < 3; j++) {
      num += generateRandomNumber(0, 9);
    }
    lottery3.push(num);
  }
  result3.textContent = lottery3.join(', ');

  // สุ่มเลขท้าย 2 ตัว
  let lottery4 = '';
  for (let i = 0; i < 2; i++) {
    lottery4 += generateRandomNumber(0, 9);
  }
  result4.textContent = lottery4;
}

// ฟังก์ชันรีเซ็ตผลการสุ่ม
function resetResults() {
  result1.textContent = '';
  result2.textContent = '';
  result3.textContent = '';
  result4.textContent = '';
}

// ตั้งค่า event listener สำหรับปุ่มสุ่มเลข
randomButton.addEventListener('click', generateLotteryNumber);

// ตั้งค่า event listener สำหรับปุ่มรีเซ็ต
resetButton.addEventListener('click', resetResults);
