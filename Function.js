// function doSomething(action){
//     console.log(action);
    
// } //Khai báo hàm 
// doSomething("Do housework"); //KQ = Do housework, khi gọi đến hàm đó thì hàm mới hoạt động

// function addFormula(a,b){
//     console.log(a+b);
// }
// addFormula("anh tuan", " PTIT");

// function addFormula(a,b){
//     return a+b;
// }
// let a = addFormula(3,4); //Nếu lấy một biến để gán cho hàm, thì trong hàm đó phải khai báo return. Nếu không sẽ cho kết quả undefined do hàm không có cái gì trả về
// console.log(a);

// const addFormula = function(a,b){ 
//     return a+b;
// } // Kiểu khai báo khác cho function, phải để là constant, ý nghĩa là method này được gán cứng thì mới hoạt động được
// console.log(addFormula(2,9));

// const addFormula = (a,b) => { 
//     return a+b;
// } // Kiểu khai báo khác cho function có dùng thêm ký tự "=>" 
// console.log(addFormula(2,9));

// console.log(addFormula(2,9)); //Kết quả sẽ in ra lỗi, do khai báo kiểu const này ở sau lệnh console.log. Trường hợp tương tự cho khai báo có dùng ký tự "=>"
// const addFormula = (a,b) => { 
//          return a+b;
// } 

// console.log(addFormula(2,9)); //Kết quả sẽ in ra 11, do khai báo kiểu function thì JS sẽ lôi thằng function ra chạy trước
// function addFormula(a,b){ 
//          return a+b;
// } 


// function doSomething(a){
//     function hasDone(b){
//         return a+b;
//     }
// }
// console.log(doSomething(3)); //KQ = undefined do hàm doSomething chưa trả gì về hết


// function doSomething(a){
//     function hasDone(b){
//         return a+b;
//     }
//     return a;
// }
// console.log(doSomething(3)); //KQ = 3

// function doSomething(a){
//     function hasDone(b){
//         return a+b;
//     }
//     return hasDone(a);
// }
// console.log(doSomething(3)); //KQ = 6

// function doSomething(a){
//     function hasDone(b){
//         return a+b;
//     }
//     function doComplete(c){
//         return a+c;
//     }
//     return hasDone(a) + doComplete(a);
// }
// console.log(doSomething(3,2,1)); //KQ = 6


// const plus_1 = (a) => {
//     return a*a;
// }

// const plus_2 = (a,b) => {
//     return a+b(a-1); //b(a-1) tượng trưng cho method plus_1
// };
// console.log(plus_2(2,plus_1)); // KQ = 3


function adds(a,b, ...more){ //Không xác định được bao nhiêu biến truyền vào thì dùng ...more
    console.log(a);
    console.log(b);
    console.log(more);    
}
adds(1,0,6,8,9);