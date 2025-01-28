let myArray = [`element1`, `element2`, `element3`, `element4`];
console.log(myArray)

alert("Boshlanishida Arryning uzunligi: " + myArray.length);
console.log("Boshlanishida Arryning uzunligi: " + myArray.length);

let userResponse = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimizmi?");

if (userResponse) {
  myArray = [`element1`, `element2`, `element3`];
  alert("Arry o'chirildi. Yangi uzunlik: " + myArray.length);
  console.log("Arry o'chirildi. Yangi uzunlik: " + myArray.length);
} else {
  alert("Array o'zgarishsiz qoldi. Uzunlik: " + myArray.length);
  console.log("Array o'zgarishsiz qoldi. Uzunlik: " + myArray.length);
}