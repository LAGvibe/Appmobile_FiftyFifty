import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { useAuthStore } from '~/store/authStore';

export default function ProtectedHome() {
    const { user, logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.replace('/auth');
    };

    const goToProfile = () => {
        router.push('/protected/profile');
    };

    return (
        <Container className="flex-1 justify-center px-6">
            <View className="space-y-6">
                <Text className="text-3xl font-bold text-center">Bienvenue! 🎉</Text>

                <View className="bg-blue-50 p-4 rounded-lg">
                    <Text className="text-lg font-semibold mb-2">Zone protégée</Text>
                    <Text className="text-gray-700">
                        Vous êtes maintenant dans une zone sécurisée de l'application.
                    </Text>
                </View>

                <View className="bg-green-50 p-4 rounded-lg">
                    <Text className="text-lg font-semibold mb-2">Informations utilisateur:</Text>
                    <Text className="text-gray-700">ID: {user?.id}</Text>
                    <Text className="text-gray-700">Email: {user?.email}</Text>
                    {user?.displayName && (
                        <Text className="text-gray-700">Nom: {user.displayName}</Text>
                    )}
                    <Text className="text-gray-700">
                        Créé le: {user?.createdAt.toLocaleDateString()}
                    </Text>
                </View>

                <View className="space-y-4">
                    <Button
                        title="Voir le profil"
                        onPress={goToProfile}
                    />

                    <Button
                        title="Se déconnecter"
                        onPress={handleLogout}
                        variant="secondary"
                    />
                </View>
            </View>
        </Container>
    );
}
