const number = 3;
let count = "";

for (let i=1; i<= 9; i++){
count += number +" * "+i+" = "+(number*i)+"\n";
}
console.log(count)


let k = 1;
let countSecond ="";
while (k <= 9) {
    countSecond += number + " * " + k + " = " + (number * k) + "\n";
    k++;
}
console.log(countSecond);