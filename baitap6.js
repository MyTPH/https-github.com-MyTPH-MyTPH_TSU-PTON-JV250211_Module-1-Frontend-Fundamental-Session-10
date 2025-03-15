let usd = +prompt("Mời bạn nhập tiền đô: ");
const exchangeRate = 25000;
let vnd = usd * exchangeRate;
document.write(usd + " USD tương đương với " + vnd + " VND");