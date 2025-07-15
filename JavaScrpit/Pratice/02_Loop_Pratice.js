for(let num=0;num<=100;num++){
    if(num%2==0){
        console.log(num);
    }
}
// 0
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// 22
// 24
// 26
// 28
// 30
// 32
// 34
// 36
// 38
// 40
// 42
// 44
// 46
// 48
// 50
// 52
// 54
// 56
// 58
// 60
// 62
// 64
// 66
// 68
// 70
// 72
// 74
// 76
// 78
// 80
// 82
// 84
// 86
// 88
// 90
// 92
// 94
// 96
// 98
// 100

const game=25;

let num = prompt("Enter the nuber u want between 1 to 50");

while(game!=num){
    num = prompt("try again enter the number");
}

console.log("congrats u have enter hte correct number"); 
