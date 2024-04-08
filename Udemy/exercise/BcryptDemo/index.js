const bcrypt = require('bcrypt');

//bcrypt로 하는일의 전부이다
//salt를 생성하고
//salt와 결합한 평문 암호를 해시하는것
//그 출력값을 DB에 저장하고 
//그리고 로그인시에는 입력된 사용자 암호와 함께 bcrypt.compare에 인자로 전달하면 
//둘의 일치여부가 bool값으로 반환된다.


//방법 1로 salt를 생성한뒤 hash함수에 전달하는방법
const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    //bcrypt의 hash메소드는 평문으로된 pw와 salt를 전달
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
    //출력해보면 salt가 hash 암호의 일부분으로 들어가있다.
}

//DB에 저장한 hash를 가져와서 인증정보를 확인할 경우 평문pw와 불러운 hashedPw값을 
const login = async (pw, hashedPw) => {
    //compare 함수를 통해 비교하면 bool값을 리턴
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("Logged in succesful match!");
    } else {
        console.log("Incorrect");
    }
}

//이런식으로 로그인가능 여부를 백그라운드에서 확인한다.
hashPassword('monkey');
