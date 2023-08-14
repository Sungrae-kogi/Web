const fs = require('fs');

const folderName = process.argv[2] || 'Project';

/*
//비동기 처리방식
fs.mkdir('Dogs', {recursive: true}, (err)=>{
    console.log("In the Callback!");
    if (err) throw err;
});
*/

//동기 처리방식 - 콜백메소드가 필요없다.
try {
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.js`);
fs.writeFileSync(`${folderName}/style.css`);
} catch (e){
    console.log("Something went wront");
    console.log(e);
}
console.log("I COME AFTER MKDIR");