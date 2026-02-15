import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const missingCerts = [
    "fao-science.png",
    "prompt-engineering.png",
    "generative-ai.png",
    "gamification.png",
    "system-verilog.png",
    "tannery-effluents.png",
    // "intro-ml.png", // Mapped to existing file
    "data-mining.png",
    "data-visualization.png"
];

const downloadDir = path.join(__dirname, 'public', 'certifications');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const placeholderUrl = "https://placehold.co/600x400/png?text=Certificate+Image";

const downloadFile = (fileName) => {
    const filePath = path.join(downloadDir, fileName);
    const file = fs.createWriteStream(filePath);

    https.get(placeholderUrl, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Created placeholder for ${fileName}`);
        });
    }).on('error', err => {
        fs.unlink(filePath, () => { });
        console.error(`Error creating placeholder for ${fileName}: ${err.message}`);
    });
};

missingCerts.forEach(cert => {
    // Check if file exists and has size > 5KB (assuming previous corrupted files were 4KB)
    const filePath = path.join(downloadDir, cert);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).size < 5000) {
        downloadFile(cert);
    } else {
        console.log(`File ${cert} already exists and seems valid.`);
    }
});
