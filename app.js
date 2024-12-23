var Maths = +prompt("Maths: " );
var Chemistry = +prompt("Chemistry: ");
var Physics = +prompt("Physics: ");
var English = +prompt("English: ");
var Pakstudies = +prompt("PakStudies: ");

var obtainMarks = (Maths + Chemistry + Physics + English + Pakstudies);
console.log("Obt Marks:", obtainMarks);

var per = obtainMarks / 500 * 100
console.log("Percentage:", per);

if(per >= 80 && per <= 100){
    console.log("A+ Grade")
}
else if(per >= 70 && per < 80){
    console.log("A Grade")
}
else if(per >= 60 && per < 70){
    console.log("B Grade")
}
else if(per >= 50 && per < 60){
    console.log("C Grade")
}
else if(per >= 40 && per < 50){
    console.log("D Grade")
}
else if(per >= 0 && per < 40){
    console.log("Fail")
}
else{
    console.log("Invalid Number")
}