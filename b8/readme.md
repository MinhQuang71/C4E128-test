vòng lặp : for, while, do...while

array: kiểu dữ liệu
length: thuộc tính --> lấy độ dài của mảng hoặc của string

*Các thao tác với array
-Create
    let arr=[5,1,7,8,"name","age",[3,4]]
-Read
    chỉ số của 1 mảng bắt đầu từ 0
    arr[i] trong đó i là chỉ số muốn lấy (i chạy từ 0 --> arr.length -1)
-Update     
    push : đẩy 1 hoặc nhiều giá trị vào cuối
    splice: 
    pop: xóa item cuối
    shift:xóa item đầu
    unshift: thêm vào đầu
    slice: cắt lấy từ star --> end
    reverse: đảo ngược
    sort: sort theo a - z
    join: nối các phần tử lại 
    includes:kiểm tra 1 phần tử có trong mảng không
-Delete
    slice
    splice
//Một số phương thứckhông làm thay mảng ban đầu
    map, slice, filter

    @@Tham trị: lưu trữ giá trị
    @@Tham chiếu: trỏ tới địa chỉ ô nhớ trên máy tính. Nên khi giá trị tại địa chỉ ô nhớ thay đổi 
    --> thay đổi hết mọi biến tham chiếu tới đó
    Thay đổi giá trị tại 1 vị trí bất kì: arr[i]=newValue

let a=[1,2,3,4,5]
//thêm
a.splice(2,0,"hello","hi")
console.log("thêm" +a)
//xóa
a.splice(2,3,"Added")
console.log("Xóa" +a)
