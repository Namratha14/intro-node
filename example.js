import fs from 'node:fs/promises'

const readPjson = async ()=> {
    const pJsonPath = new URL('./package.json', import.meta.url).pathname;
    console.log(JSON.parse(await fs.readFile(pJsonPath, 'utf-8')));
}

const write2file = async() =>{
    const newFilePath = new URL('./demo.js', import.meta.url).pathname;
    await fs.writeFile(newFilePath, `console.log('hello I am from the new file from CLI')`);
}
readPjson();
//write2file()