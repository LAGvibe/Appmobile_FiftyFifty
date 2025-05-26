import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAuthStore } from '~/store/authStore';
import { Container } from '~/components/Container';

type AuthGuardProps = {
    children: React.ReactNode;
};

export function AuthGuard({ children }: AuthGuardProps) {
    const { user, loading } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/auth');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <Container className="flex-1 justify-center items-center">
                <Text className="text-lg">Chargement...</Text>
            </Container>
        );
    }

    if (!user) {
        return (
            <Container className="flex-1 justify-center items-center">
                <Text className="text-lg">Redirection...</Text>
            </Container>
        );
    }

    return <>{children}</>;
}
