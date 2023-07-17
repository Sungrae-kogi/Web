
/*
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here');
            }
            reject('Request Error');
        }, 1000);
    })
}

fakeRequest('/dogs/')
    .then(() => {
        console.log("DONE WITH REQUEST");
        console.log("data is :", data);
    })
    .catch((err) => {
        console.log("OH NO!", err);
    });
*/


const delayedColorChange = (color, delay) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayedColorChange('red',1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('violet', 1000))
