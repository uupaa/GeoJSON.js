class RawGPSJSON {
  constructor(source) { // @arg JSON
    this._source = source;
  }
  toGeoJSON() {
    return _convertRawGeoJSON_to_GeoJSON(this._source);
  }
}

function _convertRawGeoJSON_to_GeoJSON(source) {
  let result = {
    "type": "FeatureCollection",
    "features": [],
  };
  result.features = source.map((value, index) => {
    let altitude  = value.al;
    let latitude  = value.la;
    let longitude = value.lo;
    let speed     = value.sp;
    let accuracy  = value.xa;
    let time      = _convertUnixTimeToGeoJSONTime(value.tm);

    return {
      "type": "Feature",
      "id": index + 1,
      "properties": {
        "altitude": altitude,
        "speed":    speed,
        "time":     time,     // "20170705T000102.000Z",
        "accuracy": accuracy,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [latitude, longitude],
      }
    };
  });
  return result;
}

function _convertUnixTimeToGeoJSONTime(time) {
  return new Date(time * 1000).toISOString();
}

module.exports = RawGPSJSON;

