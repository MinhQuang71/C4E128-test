// 2.a-.Khởi tạo 4 biến theo kiểu camel case
let myName = prompt("Nhap ten cua ban");
let myHeight = Number(prompt("Chieu cao cua ban (m)"));
let myLoveHeight = Number(prompt("Chiều cao cua ny ban (m)"));
let myWeight = Number(prompt("Can nang cua ban (kg)"));

//2.b,c
//Tính tổng chiều cao của bạn và người yêu
let bmi;
let t=Number(myHeight - myLoveHeight);
console.log("Chiều cao của bạn đã nhập là ", myHeight + "m");
console.log("Chiều cao của ny đã nhập là ", myLoveHeight + "m");
if (t < 0) {

    console.log("Chiều cao chênh lệch của 2 người là ", ((t * -1).toFixed(2) + "m"));
}
else {
    console.log("Chiểu cao chênh lệch của 2 người là ", (t.toFixed(2) + "m"));
}
console.log("Tổng chiều cao của cả 2 là ", myHeight + myLoveHeight + "m");
console.log("BMI = ", bmi = myWeight / (myHeight * myHeight));
//d-nang cao
//d: in ra 
if (t >= -10 && t <= 10) {
    console.log("Chiều cao hợp lý")
}
else {
    console.log("Chiều cao không hợp lý")
}


if (bmi <= 18.5) {
    console.log("Gầy")
}
else if (bmi >= 18 && bmi <= 24.9) {
    console.log("Bình thường")
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Tăng cân")
}
else if (bmi >= 30 && bmi <= 34.9) {
    console.log("Béo phì độ 1")
}
else if (bmi >= 35 && bmi <= 39.9) {
    console.log("Béo phì độ 2")
}
else {
    console.log("Béo phì độ 3")
}









