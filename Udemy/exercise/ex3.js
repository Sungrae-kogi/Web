function duplicateNum(arr){
    const duplicates = [];
    const Count = {};

    for (const number of arr){
        Count[number] = (Count[number] || 0) + 1;
        if(Count[number] ===2){
            duplicates.push(number);
        }
    }

    return duplicates;
}


console.log(duplicateNum([1,1,2,2,4,5])); // [1,2]