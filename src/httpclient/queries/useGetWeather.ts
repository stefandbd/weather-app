// import Endpoints from '../endpoints';
import axios from '../index';
import {useQuery} from '@tanstack/react-query';
import Config from 'react-native-config';

interface PropertiesI {
  id: string;
  senderName: string;
  sent: string;
  effective: string;
  ends: string;
  event: string;
  certainty: string;
  urgency: string;
  description: string;
  affectedZones: string[];
  instruction: string;
}

interface AffectedZonesI {
  id: string;
  name: string;
}

export interface AlertI {
  properties: PropertiesI;
  imageUrl: string | undefined;
  namesOfAffectedZones?: AffectedZonesI[];
}

type WeatherIAPIResponse = {
  features: AlertI[];
};

export async function fetchWeather() {
  try {
    const {data} = await axios.get<WeatherIAPIResponse>(
      `${Config.BASE_URL_WEATHER}active?status=actual&message_type=alert`,
      {
        validateStatus: (status: number) =>
          (status >= 200 && status < 300) || status === 403,
      },
    );

    // const dataWithImage = data?.features?.map(async item => {
    //   const imgResponse = await fetch('https://picsum.photos/960?blur');
    //   console.log('imgResponse', imgResponse);
    //   return {...item, imageUrl: imgResponse};
    // });

    const firstTenItems = data?.features.slice(0, 10);
    const dataWithImages = await Promise.all(
      firstTenItems.map(async item => {
        const imgResponse = await fetch('https://picsum.photos/960?blur');
        const imageUrl = imgResponse.url; // Getting the URL directly from the response object

        // Return the new object with the imageUrl included
        return {...item, imageUrl};
      }),
    );

    return [...dataWithImages];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export const cacheKey = 'get-weather';

export default function useGetWeather() {
  return useQuery({
    queryKey: [cacheKey],
    queryFn: () => {
      return fetchWeather();
    },
  });
}
