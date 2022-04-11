import {currentLocation, hospitalLocation} from '../@types/interface';

// Check if an Array or Object is Empty
export const _isEmpty = (obj: any): any =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

// Haversine for Geolocation
const measurementsConversion = (
  distance: number,
  measurement = 'km',
): number => {
  let value = '';

  switch (measurement.toLocaleLowerCase()) {
    case 'km':
      value = distance.toFixed(1);
      break;
    case 'm':
      value = (distance * 1000).toFixed();
      break;
    default:
      value = distance.toFixed(1);
  }
  return parseFloat(value);
};

// convert location distance using Haversine
const haversine = (...args: number[]): number => {
  const rad: number[] = args.map(deg => (deg / 180.0) * Math.PI);
  const lat1: number = rad[0];
  const lon1: number = rad[1];
  const lat2: number = rad[2];
  const lon2: number = rad[3];
  const dLat: number = lat2 - lat1;
  const dLon: number = lon2 - lon1;

  const R = 6372.8; // Earth radius in kilometers
  const a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  const c: number = 2 * Math.asin(Math.sqrt(a));

  return R * c;
};

const getDistanceBetween = (
  point1: currentLocation,
  point2: hospitalLocation,
  measurement: string,
): number => {
  if (
    point1.hasOwnProperty.call(point1, 'latitude') &&
    point1.hasOwnProperty.call(point1, 'longitude') &&
    point2.hasOwnProperty.call(point2, 'lat') &&
    point2.hasOwnProperty.call(point2, 'lng')
  ) {
    const distance = haversine(
      point1.latitude,
      point1.longitude,
      point2.lat,
      point2.lng,
    );
    return measurementsConversion(distance, measurement);
  } else {
    throw new Error('Error: Position not correct');
  }
};

export const getClosestPoint = (
  current: currentLocation,
  nextPoints: hospitalLocation[],
  measurement: string,
): any => {
  const distances: number[] = nextPoints.map((value: any) =>
    getDistanceBetween(current, value, measurement),
  );
  const minDistance: number = distances.indexOf(Math.min(...distances));

  return {
    position: nextPoints[minDistance],
    distance: distances[minDistance],
    measurement,
  };
};

// conditions
export const IF = (props: {condition: any | boolean; children: any}): any => {
  if (props.condition) {
    return props.children;
  }
  return null;
};

// CountDown timer
export const TimerCountDown = (counter: number): any => {
  return (
    (counter - (counter %= 60)) / 60 + (9 < counter ? ':' : ':0') + counter
  );
};
