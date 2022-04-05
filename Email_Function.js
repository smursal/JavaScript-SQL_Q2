let FirstGroupUserID = [ ];
let SecondGroupUserID = [ ];


for (let i = 1; i <= 100; i++) {
    if (i %2 === 0) {
        FirstGroupUserID.push(i);
    }
    
    
    else {
        SecondGroupUserID.push(i);
    }
}

console.log("Total Number of First Group Users = " + FirstGroupUserID.length);
console.log("Total Number of Second Group Users = " + SecondGroupUserID.length);
