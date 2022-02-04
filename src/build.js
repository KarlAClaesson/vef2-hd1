import { join } from 'path';
import { promises as fs } from 'fs';

import { dataSetTemplate } from './make-html.js';
import { parse } from './parser.js'
import { calculateStats } from './computations.js';


const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
    const files = await fs.readdir(DATA_DIR);
    
    for (const file of files) {
        const path = join(DATA_DIR, file);
        const data = await fs.readFile(path);
        const str = data.toString('utf-8');
        const parsed = parse(str);

        const stats = calculateStats(parsed);
        const dataSet = dataSetTemplate(parsed, stats);

        const filename = join(OUTPUT_DIR, `${file}.html`);
        await fs.writeFile(filename, dataSet);

        
    }

}

main().catch((err) => console.error(err));