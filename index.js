let count = 0, 
buttonwork1 = document.getElementById("btn1"), 
buttonwork2 = document.getElementById("btn2"), 
buttonwork3 = document.getElementById("btn3"), 
buttonwork4 = document.getElementById("btn4"), 
buttonwork5 = document.getElementById("btn5"), 
buttonwork6 = document.getElementById("btn6"), 
buttonwork7 = document.getElementById("btn7"),
numbercount = document.getElementById("num");
console.log("Console Log Started!")


buttonwork1.onclick = function(){
    console.log("Added Together!")
    count = count + 1
    numbercount.textContent = `${count}`;
}

buttonwork2.onclick = function(){
    console.log("Subtracted Work!")
    count = count - 1
    numbercount.textContent = `${count}`;
}

buttonwork3.onclick = function(){
    console.log("Multiplied To Billions!")
    count = count * 2
    numbercount.textContent = `${count}`;
}

buttonwork4.onclick = function(){
    console.log("Divided The Chocolates!")
    count = count / 2
    numbercount.textContent = `${count}`;
}

buttonwork5.onclick = function(){
    console.log("Squared The Circles!")
    count = count * count
    numbercount.textContent = `${count}`;
}

buttonwork6.onclick = function(){
    console.log("Cubed The Uncubicle!")
    count = count * count * count
    numbercount.textContent = `${count}`;
}

buttonwork7.onclick = function(){
    console.log("Binary Placement!")
    count = 0
    numbercount.textContent = `${count}`;
}


/*
    document.getElementById("Head1").textContent = `Hello ${user}!`; 
*/