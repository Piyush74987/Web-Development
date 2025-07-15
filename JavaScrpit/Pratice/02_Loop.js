for(let i=0;i<=5;i++){
    console.log(i);
    console.log("hello");
}
let i=0;
while(i<5){
     console.log(i);
     i++;
}
console.log("do while loop");
do{
     console.log(i);
     i++;
}
while(i<12);

let str="Fc Barcolna is great club";
let size=0;

for(let val of str){
    console.log("val= "+val)
    size++;
}
console.log(size);

let student={
    fullName:"L messi",
    age:20,
    cgpa:8.84
}

for(let i in student){
    console.log(i+" == "+student[i]);
}

// output
// 0
// 1
// 2
// 3
// 4
// do while loop
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// val= F
// val= c
// val=
// val= B
// val= a
// val= r
// val= c
// val= o
// val= l
// val= n
// val= a
// val=
// val= i
// val= s
// val=
// val= g
// val= r
// val= e
// val= a
// val= t
// val=
// val= c
// val= l
// val= u
// val= b
// 25
// fullName == L messi
// age == 20
// cgpa == 8.84
