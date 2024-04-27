import NetInfo from '@react-native-community/netinfo';
import {onlineManager, QueryClient} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(state.isInternetReachable !== false);
  });
});

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

export default function createQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 300000, // 24 hours
      },
    },
  });

  return queryClient;
}
