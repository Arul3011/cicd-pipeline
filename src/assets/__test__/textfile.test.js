import fs from "fs";
import path from "path";

test("names.txt in assets should have valid name,url pairs", () => {
  const filePath = path.join(__dirname, "../data.txt");
  const content = fs.readFileSync(filePath, "utf8");

  const lines = content.trim().split("\n");

  // Must have lines
  expect(lines.length).toBeGreaterThan(0);

  lines.forEach((line) => {
    // expect(line).toMatch(/^[a-zA-Z0-9]+,https:\/\/github\.com\/[a-zA-Z0-9_-]+$/);
    expect(line.trim()).toMatch(/^[a-zA-Z0-9]+,https:\/\/github\.com\/[a-zA-Z0-9_-]+$/);


    const [name, url] = line.split(",");

    expect(name).toMatch(/^[a-zA-Z0-9]+$/);
    expect(url.startsWith("https://github.com/")).toBe(true);
  });
});
