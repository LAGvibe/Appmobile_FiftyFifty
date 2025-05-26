import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { useAuthStore } from '~/store/authStore';

export default function ProfilePage() {
    const { user, logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.replace('/auth');
    };

    const goBack = () => {
        router.back();
    };

    return (
        <Container className="flex-1 justify-center px-6">
            <View className="space-y-6">
                <Text className="text-3xl font-bold text-center">Mon Profil 👤</Text>

                <View className="bg-gray-50 p-6 rounded-lg">
                    <View className="space-y-4">
                        <View>
                            <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                Identifiant
                            </Text>
                            <Text className="text-lg text-gray-900 mt-1">{user?.id}</Text>
                        </View>

                        <View>
                            <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                Email
                            </Text>
                            <Text className="text-lg text-gray-900 mt-1">{user?.email}</Text>
                        </View>

                        {user?.displayName && (
                            <View>
                                <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                    Nom d'affichage
                                </Text>
                                <Text className="text-lg text-gray-900 mt-1">{user.displayName}</Text>
                            </View>
                        )}

                        <View>
                            <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                Membre depuis
                            </Text>
                            <Text className="text-lg text-gray-900 mt-1">
                                {user?.createdAt.toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="space-y-4">
                    <Button
                        title="Retour"
                        onPress={goBack}
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
