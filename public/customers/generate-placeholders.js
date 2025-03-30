const fs = require('fs');
const path = require('path');

// Function to create a simple SVG with text
function createSVG(text, bgColor, textColor) {
  return `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" fill="${bgColor}" />
    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
}

// Generate company logos and success stories
for (let i = 1; i <= 12; i++) {
  const companyName = `Company ${i}`;
  
  // Regular logo - light background
  const logoSvg = createSVG(companyName, '#f8f9fa', '#333333');
  fs.writeFileSync(path.join(__dirname, `company${i}.svg`), logoSvg);
  
  // Success story - colored background
  const successSvg = createSVG(`${companyName}\nSuccess Story`, '#4a6cf7', '#ffffff');
  fs.writeFileSync(path.join(__dirname, `company${i}-success.svg`), successSvg);
}

console.log('Generated placeholder images for 12 companies');
