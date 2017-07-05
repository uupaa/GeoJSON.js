class GeoJSON {
  constructor(source) { // @arg JSON
    this._source = source;
  }
  toRawGPSJSON() {
    return _convertGeoJSON_to_RawGPSJSON(this._source);
  }
}

function _convertGeoJSON_to_RawGPSJSON(source) {
  let result = source.features.map((value, index) => {
    let altitude  = value.properties.altitude;
    let latitude  = value.geometry.coordinates[0];
    let longitude = value.geometry.coordinates[1];
    let speed     = value.properties.speed;
    let accuracy  = value.properties.accuracy;
    let time      = _convertGeoJSONTimeToRawGPSJSONTime(value.properties.time);

    return {
      "al": altitude,
      "la": latitude,
      "lo": longitude,
      "sp": speed,
      "xa": accuracy,
      "tm": time,
    };
  });
  return result;
}

function _convertGeoJSONTimeToRawGPSJSONTime(time) {
  return (new Date(time).getTime() / 1000) | 0;
}

module.exports = GeoJSON;

