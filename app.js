// !direkt sayfaya çıktı verir
function writeDocument() {
    document.write("Hello, World!");
    document.write("Hello, World222!");
}
// !Konsola çıktı verir geliştirici için kullanışlıdır
function writeConsole() {
    console.log("Hello, World!");
    console.log("Hello, World222!");
    console.log("Hello, World!");
    console.log(1234);
    console.log(true);
    console.log([1, 2, 3, 4]);
    console.log({ name: "Hakan", age: 25 });
    console.log(window);
    console.log(window.document.writeln("Hello, World!"));
    console.log(window.document.head.title);
}
// !alert mesajı verir
function showAlertMessage() {
    alert("this is an alert message");
}
// !prompt mesajı verir ve kullanıcıdan giriş alır
function getUserNames() {
    let isim1 = prompt("Enter your name: ");
    let isim3 = prompt("Enter your name3: ");
    let isim4 = prompt("Enter your name4: ");
    console.log("ismin bu bence: " + isim1);
    console.log(isim3);
    console.log(isim4);
}

// !confirm mesajı verir ve kullanıcıdan onay alır
function confirmAndConvert() {
    let booluen = confirm("Are you sure?");
    console.log(booluen);
    if (booluen == true) {
        booluen = 1;
    } else {
        booluen = 0;
    }

    let numberBoolean = Number(booluen);
    console.log(numberBoolean);
    return numberBoolean;
}

// !prompt ile alınan değerlerin oranlara göre ortalama hesaplar
function calculateAverage() {
    let vize1 = prompt("Enter your vize1: ");
    let vize2 = prompt("Enter your vize2: ");
    let final = prompt("Enter your final: ");
    let ortalama = (Number(vize1) * 0.3 + Number(vize2) * 0.3 + Number(final) * 0.4);

    if (ortalama >= 50) {
        console.log("Congratulations! You passed the lesson. Your average is: " + ortalama);
    } else if (ortalama < 50 && ortalama >= 0) {
        console.log("Sorry! You failed the lesson. Your average is: " + ortalama);
    } else {
        console.log("Please enter a valid number.");
    }
}

// !çarpım tablosunu yazdırır
function multiplicationTable() {for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + i * j);
    }
    console.log("******************");
}
}

// !asalsayı kontrolü yapar
function checkPrimeNumber() {
    let number= Number(prompt("Enter a number: "));
for(let i=2; i<Math.floor(number/2); i++){
    if (number%i==0) {
        console.log("This is not a prime number.");
        break;
    }
    else {
        console.log("This is a prime number.");
        break;
    }
}
}

// !amsrtong sayı kontrolü yapar
function checkAmstrongNumber() {
let sayi= prompt("Enter a number: ");
toplam=0;
for(i=0;i<sayi.length;i++){
    x= Number(sayi[i]**sayi.length);
    toplam+=x;
}
console.log(toplam);
console.log(Number(sayi));
if (toplam==Number(sayi)) {
    console.log("This is an amstrong number.");
}
else {
    console.log("This is not an amstrong number.");
}
}

// !Kullanıcıdan prompt olarak alınan metinde istenilen harfin kaç kez geçtiğini gösterir
function countCharacterInString() {
    let userInput = prompt("Enter a string: ");
    let character = prompt("Enter the character to count: ");
    
    if (character.length !== 1) {
        alert("Please enter a single character.");
        return;
    }

    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === character) {
            count++;
        }
    }

    alert(`The character "${character}" appears ${count} times in the string.`);
}


function isPerfectNumber(number){
    let toplam = 0;
    for(let i =2 ; i<=number/2 ; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        console.log("Mükemmel Sayıdır...");
    }else{
        console.log("Mükemmel Sayı Değildir..");
    }
}


function convertDecimalToBinary(number){
    let binary ="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            //Artık bölmek yok döngüden cıkacagız.
            binary+=1;
            break;
        }
    }
    let result  = reverse(binary);
    console.log("Sonuç : " + result);
}


function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1 ; i>=0 ; i--){
        reverseBinary+=binary.charAt(i);
    }

    return reverseBinary;
}

