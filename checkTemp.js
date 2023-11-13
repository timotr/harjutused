for(let i = 4**26; i < 5**26; i++) {
    let result = "";
    let j = i;
    while(j > 0) {
        result += String.fromCharCode(97 + j % 6);
        j = Math.floor(j / 6);
    }
    this[result] = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]
}
