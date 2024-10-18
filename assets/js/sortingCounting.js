function tekCiftAyir(){
    let oddNumbers = [];
    let evenNumbers = [];
    let numberOfIssues = Number(prompt("Kaç adet sayı girmek istiyorsunuz? (En az 10 olmalı)"));
    
    if (numberOfIssues < 10){
        alert("Lütfen en az 10 sayı giriniz.");
        return
    }
    for (let i = 0; i < numberOfIssues; i++){
        let number = Number(prompt((i + 1) + ". sayıyı girin:"));
        if (number % 2 === 0){
            evenNumbers.push(number);
        }else {
            oddNumbers.push(number);
        }
    }
    console.log("Tek sayılar: " + oddNumbers);
    console.log("Çift sayılar: " + evenNumbers);
}
tekCiftAyir();
