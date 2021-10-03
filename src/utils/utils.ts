import {Location} from 'react-native-location';
import {STATES} from '../constants/states';
import { colors } from '../constants/theme';

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

export const normalizeString = (target: string) => {
  let result = target.replace(/\s+/g, '');
  result = result.toUpperCase();
  return result;
};

export const findState = (target: string) => {
  for (const state in STATES) {
    if (normalizeString(STATES[state]) === normalizeString(target)) {
      return STATES[state];
    }
  }
  return 'LIMA METROPOLITANA';
};

export const getFormattedRisk = (risk: number | string) => {
    if (typeof risk === 'string') {
      return {label: risk, color: colors.trueBlack};
    }
    const percentage = parseInt(((risk / 7) * 100).toFixed(0));
    let color = '';
    if (percentage <= 20 && percentage >= 0) {
      color = colors.risk1;
    } else if (percentage <= 40 && percentage > 20) {
      color = colors.risk2;
    } else if (percentage <= 60 && percentage > 40) {
      color = colors.risk3;
    } else if (percentage <= 80 && percentage > 60) {
      color = colors.risk4;
    } else if (percentage <= 100 && percentage > 80) {
      color = colors.risk5;
    }
    return {label: `${percentage}%`, color: color};
  };
