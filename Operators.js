/*
let a = 5;
let b = 2;
let c = a**b; // mũ
console.log(c);
*/

/*
let a = 10/3   // chia lấy phần nguyên
let b = 10%3 // chia lấy phần dư
console.log(a)
console.log(b)
*/


// let a = 1;
// console.log(a++); // thực hiện dòng lệnh hiện tại trước rồi sau đó mới cộng vào biến đó, tương tự cho phép trừ
// console.log(a);


/*
let a = 1
console.log(++a); // cộng biến vào trước rồi mới thục hiện dòng lệnh, tương tự cho phép trừ
console.log(a);
*/

// let a = 3;
// let b = 4;
// a **= b; // tương ứng a=a+b, áp dụng cho các toán tử -,*,/,%
// console.log(a)

// let a = 3;
// let b = 4;
// console.log(a<b); //trả ra kết quả là true hoặc false
// console.log(a>b); 
// console.log(a<=b); 
// console.log(a>=b); 
// console.log(a==b); //so sánh bằng 

// let a = "Tuan";
// let b = " Nguyen"
// console.log(a+b); // cộng chuỗi
// a+=b;
// console.log(a);

// console.log(5+"5"); // số + chuỗi -> chuỗi
// console.log("5"+6); // chuỗi + số -> chuỗi
// console.log("5"== 5); //KQ ra true, so sánh cùng giá trị không quan tâm kiểu dữ liệu
// console.log("5"===5); //KQ ra false, so sánh các giá trị cùng kiểu dữ liệu 

// let a = 6;
// let b = 9;
// console.log(a>3 && a<=6) // toán tử và
// console.log(a>=6 || a>9) // toán tử hoặc
// console.log(!(a>b)) // KQ ra true,toán tử phủ định

//--------------------Toán tử 3 ngôi----------------------
// let isMale = true;
// let a = isMale ? "Male":"Female";
// console.log(a)

//----------- Phép gán ----------------------------------
// a= null;
// b= a??10; // nếu a = null sẽ gán giá trị đằng sau "??" làm giá trị cho a
// console.log(b);

// a= undefined;
// b=a??10; // nếu a = undefined sẽ gán giá trị đằng sau "??" làm giá trị cho a
// console.log(b);

// a= 11;
// b=a??10; // nếu let a = 0.2;
// let b = 0.1;
// console.log(a+b); // KQ = 0.300000... => trả ra kq theo dạng 64 bita != undefined/null sẽ vẫn lấy giá trị đã có
// console.log(b);

//------ Hai String chia cho nhau ------------
// console.log("20"/"10"); // KQ = 2
// console.log("20"*"10"); // KQ = 200
// console.log("20"-"10"); // KQ = 10
// console.log("20"+"10"); // KQ = 2010
// Javascript sẽ convert ra kiểu number để thực hiện phép tính
// Riêng đối với phép cộng sẽ ưu tiên cộng chuỗi
//--------------------------------------------

//------- Hàm xác định NaN (not a number), xác định xem phải là số không ----------
// let b = 10;
// console.log(Number.isNaN(b)); // KQ là false do b là một số

// console.log(b/"abc"); //KQ = NaN, thực hiện một phép chia phi lý

// console.log(b/0); // KQ = Infinity, bé vô cùng
// console.log(-b/0); // KQ = - Infinity, âm vô cùng
// console.log(typeof NaN); // KQ = number
// console.log(typeof Infinity); // KQ = number

// console.log(isNaN("19")) // KQ = false, hàm isNaN sẽ ép về kiểu số và mang đi so sánh có phải là NaN ko
// console.log(isNaN("19$")) // KQ = true, do "19$" là string khi ép về kiểu số sẽ không được  
// console.log(Number.isNaN("19")) // KQ = false, do "19" là string không phải là số 
//-> Hàm isNaN sẽ ép tham số truyền vàovề kiểu số trước rồi mới đi so sánh, Hàm Number.isNaN sẽ không ép về kiểu số mà đi so sánh có phải là số luôn không
//---------------------------------------------------------------------------------

//---------------------------------------- Khai báo object -------------------------------------------
// let a = new Number(10); //Khai báo kiểu object
// let b = 10;
// let c = new Number(10);
// console.log(a); // KQ = Number (10), in ra object
// console.log(a/2); // KQ = 5, convert object về số và thực hiện phép chia
// console.log(a==b); // KQ = true, so sánh object số và số nên sẽ convert object số về để so sánh với số
// console.log(a===b); //KQ= false, so sánh tuyệt đối nên object số và số sẽ sai

// console.log(a==c); // KQ = false, compare 2 object sẽ cho ra false
// console.log(a===c); // KQ = false
//-> bản chất là do 2 giá trị này được cấp ở 2 vùng nhớ khác nhau, nên sẽ cho ra KQ sai
//-----------------------------------------------------------------------------------------------------

//------------------------------------- Hàm làm tròn ---------------------------------------------------
// console.log(Math.round(12.990)); //KQ = 13, làm tròn đến số nguyên gần nhất
// console.log((12.46).toFixed(1));// KQ = 12.5, làm tròn đến số thập phân mong muốn 
//-----------------------------------------------------------------------------------------------------

//----------------------------------- Hàm so sánh ------------------------------------------------------
// let a = new Number(10); 
// let b = new Number(10); 
// console.log(a.valueOf() == b.valueOf()); // KQ = true, muốn so sánh giá trị của 2 object phải dùng hàm valueOf
//------------------------------------------------------------------------------------------------------

//------------------------------------- Kiểu String ----------------------------------------------------
// console.log("My name is \"Tuan\""); // KQ = My name is "Tuan", dùng ký tự \ khi có kí tự dấu "
// console.log("My name is 'Tuan'"); // KQ = My name is 'Tuan', dùng dấu nháy đơn trong dấu nháy kép
// console.log('Tuan'); // KQ = Tuan
// console.log("Tuan \\") // KQ = Tuan \
// console.log("abc"=="abc") // KQ = true
// console.log ("abc"=="abcd") // KQ = false
// console.log("abc".length); // KQ = 3, độ dài của chuỗi
// console.log("abc".concat("def")); // KQ = abcdef, tương đương với cộng chuỗi
// console.log("abcdef".substring(1,3)); // KQ = bc, cắt theo từ index bắt đầu và index kết thúc, nhưng character ở index kết thúc sẽ không lấy
// console.log("abcdef".toUpperCase()); // KQ = ABCDEF
// console.log("AbCdEf".toLowerCase()); // KQ = abcdef
// console.log("ABCDEF".replace("C", "HHH")); // KQ = ABHHDEF
// console.log("ABCDEFC".replace("C","HH")); // KQ = ABHHDEFC, chỉ replace chữ C thứ nhất
// console.log("ABCDEFC".replaceAll("C", "HH")); // KQ = ABHHDEFHH, replace toàn bộ chữ C
//------------------------------------------------------------------------------------------

//---------------------------------------------------- Regular Expression ----------------------------------------------------
/* Cú pháp: /pattern/flags
- flags:
 + g  => Tìm tất cả các chuỗi khớp với pattern
 + i  => Không phân biệt chữ hoa thường
 + [] => Dùng để so khớp nhiều ký tự khác nhau trong cùng một vị trí, nó sẽ khớp với bất kỳ ký tự nào nằm bên trong cặp ngoặc vuông []
 + ^  => nếu dấu ^ nằm trong cặp ngoặc vuông [] thì nó sẽ khớp với những chuỗi không có các ký tự theo sau dấu ^
 + -  => giả sử chúng ta muốn so khớp tất cả các chữ cái trong bảng chữ cái trong cùng một vị trí, chúng ta có thể viết tất cả các chữ cái vào dấu [], 
   nhưng như thế sẽ rất thiếu thực tế, có một cách đơn giản hơn đó là dùng dấu - ( vd: [a-h] --- so khớp tất cả chữ cái từ a đến h, [0-9] --- so khớp các số từ 0 đến 9 )

console.log("My name Tuan".replace(/T/i, "A")) // KQ = My name Auan
