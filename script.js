//let randomInt =['hello john','hello jim','hello pan','hello thanos'];
//buttonH = document.getElementById('btn').innerHTML = randomInt;
//randomInt= Math.floor(Math.random() *3);
function random(){

    
    let buttonH = document.getElementById('btn');
    if(buttonH){
        let randomInt =['hello john','hello jim','hello pan','hello thanos'];
        let randomIndex= Math.floor(Math.random() * randomInt.length);

        buttonH.innerHTML = randomInt[randomIndex];


        console.log(randomInt[randomIndex]);
}

        
}
document.getElementById('btn').addEventListener('click',random);