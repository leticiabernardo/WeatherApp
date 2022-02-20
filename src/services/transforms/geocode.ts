const mountComponent = (components: app.GeoCodeComponents) => {
  return {
    city: components.city || undefined,
    town: components.town || undefined,
    state: components.state || undefined,
    state_code: components.state_code || undefined,
    country: components.country || undefined,
    country_code: components.country_code || undefined,
  };
};

const mountGeometry = (geometry: app.Geometry) => {
  return {
    lat: geometry.lat,
    lng: geometry.lng,
  };
};

const transformGeoCodes = (geocodes: app.Geocode) => {
  let formattedGeocodes;
  if (geocodes?.total_results > 0) {
    formattedGeocodes = geocodes.results.map(result => {
      return {
        components: mountComponent(result.components),
        geometry: mountGeometry(result.geometry),
        confidence: result.confidence,
      };
    });
  }
  return {
    total_results: geocodes?.total_results || 0,
    results: formattedGeocodes || [],
  };
};

export { transformGeoCodes };
