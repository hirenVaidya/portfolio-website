const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function processImage() {
    const inputPath = 'file:///C:/Users/hiren/.gemini/antigravity/brain/a66a2b44-659c-42fc-83ad-e2aad8900d51/developer_avatar_1778522686179.png';
    const outputPath = 'public/profile.png';
    
    console.log("Removing background...");
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    
    console.log("Saving image...");
    fs.writeFileSync(outputPath, buffer);
    console.log("Done");
}

processImage().catch(console.error);
