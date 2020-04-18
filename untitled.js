function sentensify(str) {
    // Only change code below this line
    let sentensifySplit = str.split(/\W/);
    //console.log(sentensifySplit);
    let sentensifyJoined = sentensifySplit.join(' ')
    return sentensifyJoined;
}
console.log(sentensify("The.force.is.strong.with.this.one"));
