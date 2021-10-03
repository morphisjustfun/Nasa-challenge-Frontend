import API_URL from '../constants/api';

interface risk {
  result?: number;
  error?: string;
}

export const getRisk = (
  city: string,
  dose: number,
  covidBefore: boolean,
  brand: string,
): Promise<risk> => {
  return fetch(`${API_URL}/api/data/getRisk`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      city: city,
      dose: dose,
      brand: brand,
      covidBefore: covidBefore ? 1 : 0,
    }),
  }).then(response => response.json());
};
