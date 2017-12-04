// import fs from 'fs';



const file = fs.readFile('/poker')

class ReadPokerFile {
    constructor() {
        this.object = {
            file: file,
        }
    }

    console() {
        console.log("New File!");
    }
}
console.log(ReadPokerFile)

export default ReadPokerFile;