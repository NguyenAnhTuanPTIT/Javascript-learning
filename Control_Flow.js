// let a=5;
// if (a==5) { //So sánh tương đối
//     console.log("RIGHT");
// } else {
//     console.log("FALSE");
// }// KQ = RIGHT

//------------------------------------

// let a="5";
// if (a===5) { //So sánh tuyệt đối
//     console.log("RIGHT");
        
// } else {
//     console.log("FALSE");
// }// KQ = FALSE

//----------------------------------------------------

// function getDayofWeek(dayIndex) { //dayIndex: 0 -> 6
//     let a = ""; //Nếu sử dụng biến a để gán lại giá trị thì performance sẽ thấp, vì tất cả các điều kiện phải chạy qua hết
//     if(dayIndex == 0){
//         //a = "Monday";
//         return "Monday";
//     }
//     else if(dayIndex == 1){
//         //a = "Tuesday";
//         return "Tuesday";
//     }
//     else if (dayIndex == 2) {
//         //a = "Wednesday";
//         return "Wednesday";
//     }
//     else if (dayIndex == 3) {
//         //a = "Thursday";
//         return "Thursday";
//     }
//     else if (dayIndex == 4) {
//         //a = "Friday";
//         return "Friday";
//     }
//     else if (dayIndex == 5) {
//         //a = "Saturday";
//         return "Saturday";
//     }
//     else if (dayIndex == 6){
//         //a = "Sunday";
//         return "Sunday";
//     }
//     else
//         return "Not day in Week"
//     //return a;
// }
// console.log(getDayofWeek(0));
// console.log(getDayofWeek(1));
// console.log(getDayofWeek(2));
// console.log(getDayofWeek(3));
// console.log(getDayofWeek(4));
// console.log(getDayofWeek(5));
// console.log(getDayofWeek(6));
// console.log(getDayofWeek(7));

//----------------------------------------------------------------------------------
//FALSY VALUE: false, undefined, null, 0, NaN, the empty String ("")
// if(NaN){ //FALSY VALUE sẽ trả về false
//     console.log("Haha");
// }else{
//     console.log("Hihi");
// }//KQ = Hihi


// if(Infinity){ //Infinity là một con số
//     console.log("Haha");
// }else{
//     console.log("Hihi");
// }//KQ = Haha

//Dùng hàm if để thực hiện phép cộng nếu hai số a,b là chữ số.
// function add(a,b) {
//     if(a!=undefined && b!=undefined && a! = null && b! = null and typeof(a) == "number" && typeof(b) == "number"){
//         return a+b;
//     }
//     else{
//         return null;
//     }
// }


// function learnSwitch(a) {
//     switch (a) {
//         case 0:{
//             console.log("0 has been printed !!!");
//             break;
//         }    
//         case 1:{
//             console.log("1 has been printed !!!");
//             break;
//         }    
//         case "a":{
//             console.log("a has been printed !!!");
//             break;
//         }
//         case {}:{
//             console.log("Object has been printed");
//             break;
//         }
//         default:{
//             console.log("No value matched");
//             break;
//         }    
//     }
// }
// learnSwitch(0); //KQ = 0 has been printed !!!
// learnSwitch(1); //KQ = 1 has been printed !!!
// learnSwitch("a"); //KQ = a has been printed !!!
// learnSwitch("1"); //KQ = rỗng do hàm switch thực hiện so sánh tuyệt đối
// learnSwitch({}); //KQ = rỗng do hàm switch không so sánh được kiểu object

//Làm lại bài tập getDayofWeek dùng hàm switch
const getDayofWeek = (a) => {
    switch (a) {
        case 0:{
            return "Monday";
            //break; //không cần dùng hàm break vì return đã trả về và out hàm switch rồi
        }
        case 1:{
            return "Tuesday";
            //break;
        }
        case 2:{
            return "Wednesday";
            //break;
        }
        case 3:{
            return "Thursday";
            //break;
        }
        case 4:{
            return "Friday";
            //break;
        }
        case 5:{
            return "Saturday";
            //break;
        }
        case 6: // nếu biến truyền vào là 6 sẽ lấy giá trị của case 7
        case 7:{
            return "Sunday";
            //break;
        }
        default:{
            return "NOT A DAY IN WEEK !!!";
            //break;
        }
    }
}
console.log(getDayofWeek(0));
console.log(getDayofWeek(1));
console.log(getDayofWeek(2));
console.log(getDayofWeek(3));
console.log(getDayofWeek(4));
console.log(getDayofWeek(5));
console.log(getDayofWeek(6));
console.log(getDayofWeek(7));
console.log(getDayofWeek(8));