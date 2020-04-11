function titleCase(str) {
    let answerStr = '';
    let words = str.split(" ");
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        //    console.log(word)

        for (let j = 0; j < word.length; j++) {
            //console.log(word[j]);
            if (j === 0) {
                answerStr += word[j].toUpperCase();
            } else {
                answerStr += word[j].toLowerCase();
            }
            // console.log(answerStr);
        }
        answerStr += ' ';
        // making space inbetween words *this also adds a space at the last word's end 
    }
    return answerStr.slice(0, -1);
    // using slice method to remove the space from last element's last charector 
    //   console.log(word);
}

console.log(titleCase("I'm a little tea pot"));
