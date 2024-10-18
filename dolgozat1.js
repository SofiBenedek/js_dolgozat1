//1.feladat

function isLeapYear(year){
    
        
    if (year % 4 == 0 && year % 400 == 0) {
        if (year % 100 != 0) {
            return true;
        }else{
            return false;
        }
        
    }else{
        return false;
    }
    
    

}
let year = 2024;
console.log(isLeapYear(year));


//2.feladat

function stonePaperScissors(player1, player2) {

    if (player1 != player2) {
        if ((player1 == 0 && player2 == 1) || (player1 == 1 && player2 == 2) || (player1 == 2 && player2 == 0)) {
            return "The first player wins"
        }
        if ((player2 == 0 && player1 == 1) || (player2 == 1 && player1 == 2) || (player2 == 2 && player1 == 0)) {

            return "The second player wins"
        }
        

        
        
    }else{
        return "The game is a tie";
    }

}
let player1 = 0;
let player2 = 2;
console.log(stonePaperScissors(player1, player2))

//3.feladat

function factorial(number) {
    let Srtingnumer = number.toSring;
    let factorial = 1;
    for (let i = 0; i < number.length; i++) {
        let intnumber = parseInt(number[i]);
        factorial = factorial*intnumber; 
        
    }
    return factorial;
}
let number = 25
console.log(factorial(number));

//4.feladat

function digitsAverage(number1) {
    let Srtingnumer = number1.toSring;
    let count = 0;
    let osszeg = 0;
    for (let i = 0; i < number1.length; i++) {
        count++;
        let intnumber = parseInt(number1);
        osszeg =+ intnumber;
        
    }
    let eredmeny = osszeg / count;
    return eredmeny;
}
let number1 = 268;
console.log(digitsAverage(number1));