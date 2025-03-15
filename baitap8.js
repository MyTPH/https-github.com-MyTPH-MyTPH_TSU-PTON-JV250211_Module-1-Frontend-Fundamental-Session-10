let a = +prompt("Mời bạn nhập vào số a: ");
let b = +prompt("Mời bạn nhập vào số b: ");
let c = +prompt("Mời bạn nhập vào số a: ");
let max;
if (a >= b && a >= c){
    max = a;
} else if (b >= a && b >= c){
    max = b;
} else {
    max = c;
}
document.write("Giá trị lớn nhất trong ba số là: " + max);