// !direkt sayfaya çıktı verir
document.writeln("Hello, World!");
document.writeln("Hello, World222!");

// !Konsola çıktı verir geliştirici için kullanışlıdır
console.log("Hello, World!");
console.log(1234);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({ name: "Hakan", age: 25 });
console.log(window);
console.log(window.document.writeln("Hello, World!"));
console.log(window.document.head.title);

// !popup mesajı verir
alert("this is an alert message");

// !Kullanıcıdan veri alma
let isim1=prompt("Enter your name: "); // !prompt sadece string döner number almak istiyorsak type conversion yapmalıyız
let isim2=prompt("Enter your name2: ");
window.prompt("Enter your name2: ");
console.log(prompt("Enter your name3: "));
console.log(window.prompt("Enter your name4: "));

console.log("ismin bu bence: " +isim1);

let booluen = confirm("Are you sure?");
console.log(booluen);
if (booluen == true) {
    booluen = 1;}
else { booluen = false;
    booluen = 0;}

let numberBoolean = Number(booluen);
console.log(numberBoolean);
let vize1 = prompt("Enter your vize1: ");
let vize2 = prompt("Enter your vize2: ");
let final = prompt("Enter your final: ");
let ortalama = (Number(vize1)*0.3 + Number(vize2)*0.3 + Number(final)*0.4);
if (ortalama>=50) {
    console.log("Congratulations! You passed the lesson. Your average is: " + ortalama);
}
else if (ortalama<50 && ortalama>=0) {
    console.log("Sorry! You failed the lesson. Your average is: " + ortalama);
}
else {
    console.log("Please enter a valid number.");
}