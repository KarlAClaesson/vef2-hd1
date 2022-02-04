import { join } from 'path';
import { promises as fs } from 'fs';

import graymatter from 'gray-matter';
import { marked } from 'marked';

import { dataSetTemplate, makeHTML } from './make-html.js';
import { parse } from './parser.js'


const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
    const files = await fs.readdir(DATA_DIR);
    
    for (const file of files) {
        const path = join(DATA_DIR, file);
        const data = await fs.readFile(path);
        const str = data.toString('utf-8');

        const parsed = parse(str);
        

        const dataSet = dataSetTemplate(parsed);
        /* const slug = parsed.metadata.slug; */
        const filename = join(OUTPUT_DIR, `${file}.html`);

        const written = await fs.writeFile(filename, dataSet);

        
    }

}

main().catch((err) => console.error(err));