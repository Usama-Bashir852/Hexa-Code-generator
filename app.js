
const randomNum = () => {
    let randomNumber = Math.floor(Math.random() * 16777215) ;
    let randomCode = "#"+randomNumber.toString(16);
    

document.body.style.backgroundColor = randomCode;
document.body.style.transition = '1s';
 document.getElementById('color').innerHTML = randomCode;
// console.log(randomNumber, randomCode);

}
randomNum()
document.getElementById("btn").addEventListener('click',()=> {
    randomNum()
});
;

document.getElementById('btn2').addEventListener('click', ()=>{
let heading = document.getElementById('color').innerHTML;
navigator.clipboard.writeText(heading);
alert('Copy Successfully')
            
            
    
    })

