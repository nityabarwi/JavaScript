let score = prompt("Enter your score");
let grade;
if (score >= 80 && score <= 100){
    grade = 'A';
}else if (score >= 70 && score <= 79){
    grade = 'B';
}else if (score >= 60 && score <= 69){
    grade = 'C';
}else if (score>= 0 && score <= 59){
    grade = 'D';
}else{
    grade = 'Invalid Score';
}

console.log(Grade);
