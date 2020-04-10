function repeatStringNumTimes(str, num) {
    let answerStr = '';
    while (num > 0) {
        answerStr += str;
        num--;
    }
    return answerStr;
}

console.log(repeatStringNumTimes("abc", 3));
