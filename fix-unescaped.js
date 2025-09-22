const fs = require("fs");
const path = require("path");

const projectDir = "./components";

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Only replace quotes inside JSX text nodes (between > and <)
  content = content.replace(/>([^<]+)</g, (match, text) => {
    const fixed = text
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;");
    return `>${fixed}<`;
  });

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Fixed safely: ${filePath}`);
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith(".js") || file.endsWith(".jsx")) {
      fixFile(filePath);
    }
  });
}

walkDir(projectDir);
