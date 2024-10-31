//let arr = ["A", "B", "C"]; //khai báo array
//console.log(arr);

let arrNums = [1,2,3];
// console.log(arrNums);
// console.log(arrNums[0]); // lấy phần tử đầu tiên trong mảng
// console.log(arrNums[arrNums.length-1]); //Lấy phần tử cuối trong mảng
// console.log(arrNums[5]); // kQ sẽ cho ra undefined
// arrNums[0] = 5; //sửa lại giá trị của 1 phần tử trong mảng
// console.log(arrNums);
// arrNums[5] = 4; //Nếu gán vào phần tử ko có trong mảng, nó sẽ tăng size của mảng lên
// console.log(arrNums); //KQ = (6) [5, 2, 3, …, 4] và vị trí thứ 4 sẽ undefined

// const arrA = ["KKK","OOO","PPP"]; //Khai báo const để tránh bị gán lại
// arrA[0] = "bbb"; //Việc thay đổi giá trị của phần tử vẫn hoạt động bình thường 
// console.log(arrA); //KQ = (3) ['bbb', 'OOO', 'PPP']

const arrB = new Array(1,2,3);
console.log(arrB);
const arrC = new Array(2); //Nếu khai báo chỉ có 1 đối số như thế này thì sẽ tạo ra một mảng với 2 phần tử có giá trị undefined
console.log(arrC); //KQ = (2) […]
console.log(arrC.length); //KQ = 2, đây là kích thước của mảng  
console.log(arrC[1]); //KQ = undefined 






