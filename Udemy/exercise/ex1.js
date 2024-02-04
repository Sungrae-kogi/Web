//주어진 배열에서 중복된 숫자를 찾는 함수

function findDuplicate(arr){
    let result = [];
    let countMap = {};
    for (let num of arr){
        if(countMap[num]){
            result.push(num);
        }else{
            countMap[num] = 1;
        }
    }
    return result;
}

const exampleArray = [1, 2, 3, 4, 5, 2, 7, 8, 8, 9, 10, 1];

const duplicates = findDuplicate(exampleArray);

console.log("배열에서 중복된 숫자 : ", duplicates);