import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certifications = [
    { name: "fao-science.png", url: "https://img.sanishtech.com/u/eb7461c6fd379175b54f57512b455724.png" },
    { name: "prompt-engineering.png", url: "https://img.sanishtech.com/u/2a60afd2650418821a39664b1deeadf1.png" },
    { name: "generative-ai.png", url: "https://img.sanishtech.com/u/5262afafe0996eabbba6e9f6f543f8db.png" },
    { name: "gamification.png", url: "https://img.sanishtech.com/u/c2e373eb001f648a9857cd561438f747.png" },
    { name: "system-verilog.png", url: "https://img.sanishtech.com/u/6faa3ea64952d1f399b0e729fdf5a9ce.png" },
    { name: "tannery-effluents.png", url: "https://img.sanishtech.com/u/c213b3d9796bfc14d9ebc76a2070fec1.png" },
    { name: "intro-ml.png", url: "https://img.sanishtech.com/u/fa607372f768c4564b599b4670e74696.png" },
    { name: "data-mining.png", url: "https://img.sanishtech.com/u/eb27983d0824e18cc9b8530741c3a0d5.png" },
    { name: "data-visualization.png", url: "https://img.sanishtech.com/u/0450c0357968c4afb7f904bd7b520806.png" }
];

const downloadDir = path.join(__dirname, 'public', 'certifications');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

certifications.forEach(cert => {
    const filePath = path.join(downloadDir, cert.name);
    const file = fs.createWriteStream(filePath);

    https.get(cert.url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${cert.name}`);
        });
    }).on('error', err => {
        fs.unlink(filePath, () => { }); // Delete the file async. (But we don't check result)
        console.error(`Error downloading ${cert.name}: ${err.message}`);
    });
});
