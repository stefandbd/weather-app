import React, {useRef} from 'react';
import createQueryClient, {persister} from '@httpclient/createQueryClient';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from '@types/Routing';
import {TabNavigator} from '@navigation/tab-navigator';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';

const queryClient = createQueryClient();

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const routeNameRef = useRef<string | undefined>();

  return (
    <PersistQueryClientProvider
      onSuccess={() =>
        queryClient
          .resumePausedMutations()
          .then(() => queryClient.invalidateQueries())
      }
      persistOptions={{persister}}
      client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.getCurrentRoute()?.name;
          }}>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
}

export default App;
