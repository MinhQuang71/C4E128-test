let m = Number(prompt("Kiểm tra số hoàn hảo"));
if(isNaN(m)){
    alert("Nhập sai giá trị")
}
let s = 0;

for( let i = 1; i < m; i++){
    if(m % i == 0){
        s = s + i;
    }
    
}
if(s == m){
    console.log(m ,'là số hoàn hảo')
}
else{
    console.log(m, "không phải số hoàn hảo")
}