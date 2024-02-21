//프로그래머스 문자열 겹쳐쓰기
function solution(my_string, overwrite_string, s) {
    var answer = '';
    const replaceLength = overwrite_string.length;
    let semi = my_string.slice(s, s + replaceLength);

    return my_string.replace(semi, overwrite_string);

}

//테스트케이스 한개가 틀려서 넘어가지 못함, splice 함수 사용해서 풀이가있음
//Array.splice(start, deleteCount, newItem, newItem);

function solution(my_string, overwrite_string, s) {

    const replaceLength = overwrite_string.length;
    let str = my_string.split('');
    //str = str.splice(s, replaceLength, overwrite_string); 이라고 해서 계속 오답, splice는 배열을 직접 수정할뿐 리턴하지않는다.
    str.splice(s, replaceLength, overwrite_string);

    return str;
}


//단순하게 생각했어야했다.
function solution(my_string, overwrite_string, s) {
    return my_string.substring(0,s) + overwrite_string + my_string.substring(s+overwrite_string.length);
}