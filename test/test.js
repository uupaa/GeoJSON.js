const fs = require("fs");
const GeoJSON = require("../lib/GeoJSON.js");
const RawGPSJSON = require("../lib/RawGPSJSON.js");

function test1() {
  console.log(process.cwd());
  const string = fs.readFileSync("./test/assets/examples/20170705T000000_000000.raw.json", "utf-8");

  const result = new RawGPSJSON(JSON.parse(string)).toGeoJSON();

  console.log(JSON.stringify(result, null, 2));
}

function test2() {
  console.log(process.cwd());
  const string = fs.readFileSync("./test/assets/examples/20170705T000000_000000.geo.json", "utf-8");

  const result = new GeoJSON(JSON.parse(string)).toRawGPSJSON();

  console.log(JSON.stringify(result, null, 2));
}

test1();
test2();

