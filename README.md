# GeoJSON.js

Convert GeoJSON to RawGPSJSON(ZweiteGPS) format.

## Examples

```js
import { GeoJSON } from "./lib/GeoJSON.js";
import { RawGPSJSON } from "./lib/RawGPSJSON.js";
// require "./lib/GeoJSON.js";
// require "./lib/RawGPSJSON.js";

const geojson = { ... };

let rawgpsjson = new GeoJSON(geojson).toRawGPSJSON();
let geojson2 = new RawGPSJSON(rawgpsjson).toGeoJSON();
```


## GeoJSON format

```json
{
  "type": "FeatureCollection",
  "features": [
  {
    "type": "Feature",
    "id": 1,
    "properties": {
      "altitude": "108.2",
      "speed": "0.0",
      "time": "2017-07-04T23:06:58.000Z",
      "accuracy": 15
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        35.65899134123855,
        139.7032735708926
      ]
    }
  }, { ... }
}
```

## RawGPSJSON format

```json
[
  {
    "al": 100.5634765625,
    "la": 139.00218023000193,
    "lo": 36.328433719497475,
    "sp": 2.329999923706055,
    "xa": 5,
    "tm": 1412205350
  }, { ... }
]
```
