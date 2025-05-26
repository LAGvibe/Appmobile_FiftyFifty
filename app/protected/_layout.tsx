import { Stack } from 'expo-router';
import { AuthGuard } from '~/components/AuthGuard';

export default function ProtectedLayout() {
    return (
        <AuthGuard>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Accueil' }} />
                <Stack.Screen name="profile" options={{ title: 'Profil' }} />
            </Stack>
        </AuthGuard>
    );
}
