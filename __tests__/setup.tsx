let fs = require("fs"),
    path = require("path"),
    example = path.join(__dirname, "../config.example.json"),
    config = path.join(__dirname, "../config.json")

declare var __dirname;

beforeAll(() => {
    if (!fs.existsSync(config)) {
        fs.writeFileSync(config, fs.readFileSync(example));
    }
});

test("config file should exist", () => {
    let exists = fs.existsSync(config)
    expect(exists).toEqual(true)
})