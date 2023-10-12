import { readFile, writeFile, chmod } from "fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename:string = fileURLToPath(import.meta.url);
const __dirname:string = path.dirname(__filename);
console.log(__dirname);

const backupFile:string = `${__filename}-${Date.now()}`;
console.log(backupFile);

readFile(__filename, (err, data) => {
    if(err){
        return console.error(err);
    }
    writeFile(backupFile, data, (err) => {
        if(err){
            return console.error(err);
        }
        chmod(backupFile, 0o400, (err) => {
            if(err){
                return console.error(err);
            }
            console.log("done");
        });
    });
});
