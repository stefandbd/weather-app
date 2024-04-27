import Config from 'react-native-config';
import axios from '../index';
import {useQuery} from '@tanstack/react-query';
import {AlertI} from './useGetWeather';

export async function fetchAlert(id: string) {
  try {
    const headers = {
      'Content-Type': 'application/geo+json',
    };
    const {data} = await axios.get<AlertI>(`${Config.BASE_URL_WEATHER}${id}`, {
      headers,
      validateStatus: (status: number) =>
        (status >= 200 && status < 300) || status === 403,
    });

    const namesOfAffectedZones = await Promise.all(
      data?.properties?.affectedZones.map(async item => {
        console.log('item', item);

        const affectedZonesResponse = await axios.get(item);
        const propertiesObject = affectedZonesResponse.data.properties;
        const propertiesJSON = JSON.stringify(propertiesObject);
        const propertiesParsed = JSON.parse(propertiesJSON);
        return propertiesParsed as string;
      }),
    );
    data.namesOfAffectedZones = namesOfAffectedZones;
    return data;
  } catch (error) {
    console.error('Error fetching alert:', JSON.stringify(error));
    throw error;
  }
}

export const cacheKey = 'get-alert-id';

export default function useGetAlert(id: string) {
  return useQuery({
    enabled: !!id,
    queryKey: [cacheKey, id],
    queryFn: () => {
      return fetchAlert(id);
    },
  });
}
