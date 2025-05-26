import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../store/authStore';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { login, register } = useAuthStore();
  const router = useRouter();

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      if (isRegistering) {
        await register(email, password);
        Alert.alert('Succès', 'Compte créé avec succès!');
        router.replace('/protected');
      } else {
        await login(email, password);
        Alert.alert('Succès', 'Connexion réussie!');
        router.replace('/protected');
      }
    } catch (error: any) {
      Alert.alert('Erreur', error.message);
    }
  };

  return (
    <Container className="flex-1 justify-center px-6">
      <View className="space-y-6">
        <Text className="text-3xl font-bold text-center mb-8">
          {isRegistering ? 'Créer un compte' : 'Se connecter'}
        </Text>

        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-base"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-base"
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title={isRegistering ? 'Créer le compte' : 'Se connecter'}
          onPress={handleAuth}
          className="mt-4"
        />

        <Button
          title={isRegistering ? 'Déjà un compte ? Se connecter' : 'Pas de compte ? S\'inscrire'}
          onPress={() => setIsRegistering(!isRegistering)}
          variant="secondary"
        />
      </View>
    </Container>
  );
}
