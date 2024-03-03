// const buttons=document.querySelectorAll('button');
// let result=document.querySelector('.result');
// let a;
// let b;
// buttons.forEach(function(button){
//        button.addEventListener('click',function(e){
//         console.log(e);
//         if(e.target.id==='sev'){
//             result.innerHTML="7"
           
//         }
//         if(e.target.id==='eig'){
//             result.innerHTML="8"
           
//         }if(e.target.id==='nin'){
//             result.innerHTML="9"
//         }
//         if(e.target.id==='six'){
//             result.innerHTML="6"
           
//         }
//         if(e.target.id==='five'){
//             result.innerHTML="5"
           
//         }
//         if(e.target.id==='four'){
//             result.innerHTML="4"
           
//         }
//         if(e.target.id==='thr'){
            
//             result.innerHTML="3"
           
//         }
//         if(e.target.id==='two'){
//             result.innerHTML="2"
           
           
//         }
//         if(e.target.id==='zero'){
//             result.innerHTML="0"
           
//         }
//         if(e.target.id==='del'){
//             result.innerHTML="0"
//         }
//         if(e.target.id==='one'){
//             result.innerHTML="1"
            
//         }
        

//        })
// })
function dis(val) {
    document.getElementById("result").value +=val
    
}
function myFunction(event) {
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||
    event.key=='4'||event.key=='5'||event.key==''||event.key=='7'||event.key=='8'||
    event.key=='9'||event.key=='+'||event.key=='%'||event.key=='^'||event.key=='-'||event.key=='*'||event.key=='/')
    document.getElementById("result").value+=value}
var cal=document.getElementById("calc");
cal.onkeyup=function (event) {
    if(event.keyCode===13){
        console.log("enter");
        let x=document.getElementById("result").value
        console.log(x);
        solve();
    }
    
}
function solve(){
    let x =document.getElementById("result").value
    let y =math.evaluate(x)
    document.getElementById("result").value=y
}
function clr(){
    document.getElementById("result").value = ""
}