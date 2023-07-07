console.log("Before Conditional");

let randInt = Math.random();
if(randInt < 0.5) {
    console.log("number is less than 0.5");
}else {
    console.log("number is more than 0.5");
}

console.log("After conditional");

// 요일 판독
const dayOfWeek = prompt("Enter A Day").toLowerCase();

if (dayOfWeek === 'monday'){
    console.log('I Hate Monday.');
}else if (dayOfWeek === 'saturday') {
    console.log('I Love Saturdays.');
}else {
    console.log('meh');
}


//패스워드 공백 판독
const password = prompt("Enter your password");

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("VALID PASSWORD");
}else {
    console.log("Incorrect Format For Password");
}

function makeBetweenFunc(min,max){
    return function(num){
        return num>=min && num<=max;
    }
}

const isAdult = makeBetweenFunc(19,64);
const isSenior = makeBetweenFunc(65,120);