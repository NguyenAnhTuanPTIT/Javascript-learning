/* Show the ouput in the console log 
console.log("Hello world")
*/

// let a = 5;
// let b = 4
// let c = a + b;
// console.log(c);


// {
//     let a = 3
//     {
//         console.log(a)    
//     }

// }
// console.log(a)


// let a = null;
// console.log(a) //=> In ra giá trị null



// {
//     var a = 7;
// }
// console.log(a)

//=> Var là khai báo biến toàn cục, let là khai báo cục bộ
//=> Biến dùng var có thể thay đổi giá trị được, còn biến dùng let không thay đổi giá trị được
//=> Nếu khai báo biến không dùng var hay let (vd: x = 3) thì được coi là biến toàn cục


// const PI = 3.14
// PI = 3;

// const objA = {};
// console.log(objA);
// objA ["name"]= "Nguyen Anh Tuan";
// console.log(objA);

//-------------------------------------- Cách xác định giá trị của biến khi có nhiều block -----------------------------------
// {
//     // let a = 2;
//     // {
//     //     let a = 5;
//     //     for(let a = 0; a < 10; a++){
//     //         let a = 3;
//     //         console.log(a); // KQ = 3, sẽ lấy giá trị của biến a trong block cuối cùng 
//     //     }
//     // }

//      let h = 9;
//      while (h < 10){ // tại dòng lệnh này h này là h = 9 < 10 => điều kiện luôn luôn thỏa và vòng lặp sẽ ko end được
//     //     //let h = 2; // tại dòng lệnh này h này h = 2, khác với h = 9 ở trên
//     //     //console.log(h);
//          let h = 9;
//          //console.log(h);
//          h++;
//          console.log(h);
//      }

// }

