//100回ループを回し、list4-4.txtに数値を上書きしていく(再起処理利用)

import * as fs from "fs";

const writeFile = (i: number): void => {
    if(i >= 100){
        return;
    }
    const text :string = `write: ${i}`;
    fs.writeFile("../data/list4-4.txt", text, (err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(text);
        writeFile(i + 1);
    });
};

writeFile(0);