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

// const arrB = new Array(1,2,3);
// console.log(arrB);
// const arrC = new Array(2); //Nếu khai báo chỉ có 1 đối số như thế này thì sẽ tạo ra một mảng với 2 phần tử có giá trị undefined
// console.log(arrC); //KQ = (2) […]
// console.log(arrC.length); //KQ = 2, đây là kích thước của mảng  
// console.log(arrC[1]); //KQ = undefined 

// const arr = [1, "abc",{
//     ten:"Tuan",
//     tuoi:28
// },["A", 99999,"bbb"]]; // có thể khai báo flexible nhiều kiểu dữ liệu khác nhau trong mảng
// console.log(arr);
// console.log(typeof arr); //KQ = object, mảng này chứa nhiều loại khác nhau nên sẽ được coi là 1 object

// const arr = ["C", "o", "l"];
// arr[arr.length] = "ZBBBZ"; //Add thêm 1 phần tử cuối cùng vào mảng
// console.log(arr); //KQ = (4) ['C', 'o', 'l', 'ZBBBZ']
// arr.push("XXXX"); //Push vào cuối mảng, nghĩa là thêm 1 phần tử
// console.log(arr);
// arr.unshift("LEFT"); //Thêm 1 phần tử ở đầu
// console.log(arr);
// arr.shift(); //Xóa đi phần tử ở đầu
// console.log(arr);
// console.log(arr.pop()); //Lấy phần tử ở cuối ra
// console.log(arr);

// const arr = ["o", "P", "I"];
// arr.splice(1,0,"K","L"); //Chèn phần tử vào nơi mong muốn, ở đây là chèn vào vị trí sau phần tử đầu tiên, 0 là bắt đầu từ vị trí số 1 đi thì không xóa đi thằng nào cả
// console.log(arr); //KQ = (5) ['o', 'K', 'L', 'P', 'I']

// const arr = ["o", "P", "I"];
// arr.splice(1,1,"K","L");
// console.log(arr); //KQ = (5) ['o', 'K', 'L', 'I']

// const arr = ["o", "P", "I"];
// arr.splice(1,2,"K","L");
// console.log(arr); //KQ = (5) ['o', 'K', 'L']

// const arr = ["o", "P", "I"];
// arr.splice(1,1); // Xóa phần tử mong muốn
// console.log(arr); //KQ = (5) ['o', 'I']

// const arr = ["o", "P", "I"];
// arr.splice(1,2); // Xóa phần tử mong muốn
// console.log(arr); //KQ = (5) ['o']

// const arr = ["o", "P", "I"];
// console.log(arr.slice(0,1)); //KQ = (1) ['o'] , cắt từ vị trí số 0 đến vị trí số 1, hàm này để lấy phần tử ra chứ không xóa phần tử trong mảng gốc
// console.log(arr); //KQ = (3) ['o', 'P', 'I'], mảng gốc vẫn được giữ nguyên


// const arr = ["o", "P", "I", "PO", "GGG", "mmm"];
// console.log(arr.slice(2,5)); //KQ = (1) ['o'] , cắt từ vị trí số 2 đến vị trí số 5, không bao gồm phần tử thứ 5
// console.log(arr); //KQ = (3) ['I', 'PO', 'GGG'], mảng gốc vẫn được giữ nguyên

// const arr = ["o", "P", "I", "PO", "GGG", "mmm"];
// console.log(arr.join("-")); //KQ = , kết hợp các ký tự lại với nhau bằng dấu "-"
// console.log(arr.join()); //KQ = o,P,I,PO,GGG,mmm, default là dấu phẩy
// console.log(arr.join("")); //KQ = oPIPOGGGmmm, các kí tự dính liền nhau

// const arr = ["o", "P", "I", "PO", "GGG", "mmm"];
// delete arr[1]; //Xóa value của phần tử đó, vẫn giữ nguyên kích thước của mảng
// console.log(arr); //KQ = (6) ['o', …, 'I', 'PO', 'GGG', 'mmm'], vị trí vừa bị xóa sẽ là undefined

// const arr = ["o", "P", "I", "PO", "GGG", "mmm"];
// console.log(arr.sort()); //KQ = (6) ['o', …, 'I', 'PO', 'GGG', 'mmm'], sắp xếp mảng theo thứ tự alphabet
// console.log(arr.sort().reverse()); // KQ = (6) ['o', 'mmm', 'PO', 'P', 'I', 'GGG'], sắp xếp ngược theo thứ tự alphabet

// const arr = [4, 6, 5, 33, 0, 5];
// console.log(arr.sort()); //KQ = (6) [0, 1, 10, 33, 5, 7] , kết quả này có vẻ như ko đúng thứ tự tăng dần của số là do hàm sort trong JS sắp xếp theo kiểu ký tự alphabet (sắp xếp kiểu string)
// console.log(arr.sort().reverse()); // KQ = (6) [7, 5, 33, 10, 1, 0]
// console.log(arr.sort(function(a,b){return a-b})); //Hàm sort hỗ trợ function dùng thuật toán sort tăng dần (quick sort algorithm)
// console.log(arr.sort(function(a,b){return b-a})); //Hàm sort hỗ trợ function dùng thuật toán sort giảm dần

const students = [
    {
        Name: "JOHN",
        age: 28
    },
    {
        Name:"Catherine",
        age: 42
    },
    {
        Name: "Carter",
        age: 54
    },
    {
        Name: "ADAM",
        age: 32
    },
    {
        Name: "JackSon",
        age: 12
    }
];
// console.log(students[0].age);
// console.log(JSON.stringify(students.sort(function (a,b){return a.age - b.age}))); //Sắp xếp lại mảng theo tuổi tăng dần
// console.log(JSON.stringify(students.sort(function (a,b){return b.age - a.age}))); //Sắp xếp lại mảng theo tuổi giảm dần
// console.log(JSON.stringify(students.sort(function (a,b){return a.Name.localeCompare(b.Name)}))); // Sắp xếp lại mảng theo tên tăng dần
// console.log(JSON.stringify(students.sort(function (a,b){return b.Name.localeCompare(a.Name)}))); // Sắp xếp lại mảng theo tên giảm dần








