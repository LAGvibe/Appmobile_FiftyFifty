import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

import { Container } from '~/components/Container';
import { useAuthStore } from '~/store/authStore';

export default function Home() {
  const { user, loading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/protected');
      } else {
        router.replace('/auth');
      }
    }
  }, [user, loading]);

  return (
    <>
      <Stack.Screen options={{ title: '50/50 App' }} />
      <Container className="flex-1 justify-center items-center">
        <View className="items-center space-y-4">
          <Text className="text-3xl font-bold text-center">50/50 🏠</Text>
          <Text className="text-lg text-gray-600">Chargement de l'application...</Text>
        </View>
      </Container>
    </>
  );
}
