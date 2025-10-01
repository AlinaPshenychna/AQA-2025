const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const copyNumberList = numbersList.map((num) => num);
console.log(copyNumberList);

const filterNumberList = copyNumberList.toSorted((a, b) => a - b);
console.log(filterNumberList);
