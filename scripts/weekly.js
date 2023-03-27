import fs from 'fs';
import path from 'path';

const pattern = new RegExp('issue\-([0-9]+)');

function fsm(content) {
    const lines = content.split('\n');
    const meta = {};
    let yearStatus = null;
    let monthStatus = null;
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (line.startsWith('## 20')) {
            const year = line.slice(3);
            meta[year] = {};
            yearStatus = year;
        } else if (line.includes('月')) {
            const month = line.replaceAll('*', '').trim();
            meta[yearStatus][month] = [];
            monthStatus = month;
        } else if (line.startsWith('- 第')) {
            const title = line.slice(line.indexOf('[') + 1, line.indexOf(']'));
            const issueNo = pattern.exec(line)[0];
            meta[yearStatus][monthStatus].push([title, issueNo]);
        }
        i++;
    }
    return meta;
}

function parseWeeklyReadme(dir) {
    const files = fs.readFileSync(path.join(dir, 'README.md'));
    return fsm(files.toString());
}

// console.log(pattern.exec('- 第 244 期：[大数据已死](docs/issue-244.md)'));
let meta = parseWeeklyReadme('./weekly-master');
console.log(JSON.stringify(meta));