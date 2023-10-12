//100回ループを回し、list4-4.txtに数値を上書きしていく(callbackのみ)

import * as fs from "fs";

for(let i: number = 0; i < 100; i++){
    const text :string = `write: ${i}`;

    fs.writeFile("../data/list4-3.txt", text, (err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(text);
    });
}