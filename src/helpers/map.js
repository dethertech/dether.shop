import supercluster from 'points-cluster';

const isEqu = (pos1, pos2) => (
  pos1.lat === pos2.lat && pos1.lng === pos2.lng
);

const toRadians = deg => deg * (Math.PI / 180);

const distance = (pos1, pos2) => {
  const R = 6371e3; // metres
  const d1 = toRadians(pos1.lat);
  const d2 = toRadians(pos2.lat);
  const dp = toRadians(pos2.lat - pos1.lat);
  const dl = toRadians(pos2.lng - pos2.lng);

  const a = (Math.sin(dp / 2) * Math.sin(dp / 2)) +
          (Math.cos(d1) * Math.cos(d2) *
          Math.sin(dl / 2) * Math.sin(dl / 2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return (R * c);
};


const getClusterData = (data, propsMap) => {
  const cl = supercluster(data, {
    minZoom: 0,
    maxZoom: 15,
    radius: 100 // set this to if you want to change the distance to be use to clusters
  });

  return cl(propsMap).map(({ wx, wy, numPoints, points }) => ({
    ...points[0],
    lat: wy,
    lng: wx,
    text: numPoints,
    numPoints,
    id: `${numPoints}_${points[0].id}`
  }));
};

export async function addressByPosition({ lat, lng }) {
  const { google } = window;
  const geocoder = new google.maps.Geocoder();
  const { OK } = google.maps.GeocoderStatus;
  const latlng = new google.maps.LatLng(lat, lng);

  return new Promise((resolve, reject) => {
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status !== OK) {
        reject(status);
      }
      resolve(results);
    });
  });
}

export async function addressNameByPosition(position) {
  const address = await addressByPosition(position).catch(() => null);
  if (address && address.length > 0) {
    return address[0].formatted_address;
  }
  return null;
}

export { isEqu, distance, getClusterData };
