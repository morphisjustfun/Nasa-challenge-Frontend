import {Location} from 'react-native-location';

export interface GeoDecode {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: number;
  lat?: string;
  lon?: string;
  place_rank?: number;
  category?: string;
  type?: string;
  importance?: number;
  addresstype?: string;
  name?: null;
  display_name?: string;
  address?: Address;
  boundingbox?: string[];
}

export interface Address {
  house_number: string;
  road: string;
  neighbourhood: string;
  city: string;
  region: string;
  state: string;
  postcode: string;
  country: string;
  country_code: string;
}

export const getLastLocation = (locations: Location[]) => {
  const lastLocation = locations.reduce(
    (previous: Location, current) => {
      previous = previous.timestamp > current.timestamp ? previous : current;
      return previous;
    },
    {
      speed: 0,
      course: 0,
      accuracy: 0,
      altitude: 0,
      latitude: 0,
      longitude: 0,
      timestamp: 0,
      altitudeAccuracy: 0,
    },
  );
  return lastLocation;
};

export const geoDecode = async (
  latitude: number,
  longitude: number,
): Promise<GeoDecode> => {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
  ).then(response => response.json());
};

export const getConvertedLocation = (location: Address | undefined) => {
  if (location?.road && location?.city && location?.country) {
    return `${location.road}, ${location.city}, ${location.country}`;
  }
  return '';
};
