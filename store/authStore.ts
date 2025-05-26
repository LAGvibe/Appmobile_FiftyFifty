import { create } from 'zustand';
import { User as FirebaseUser, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { User } from '../types/User';

interface AuthState {
    user: User | null;
    firebaseUser: FirebaseUser | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, displayName?: string) => Promise<void>;
    logout: () => Promise<void>;
    initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    firebaseUser: null,
    loading: true,

    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            const user: User = {
                id: firebaseUser.uid,
                email: firebaseUser.email!,
                displayName: firebaseUser.displayName || undefined,
                createdAt: new Date(firebaseUser.metadata.creationTime!),
            };

            set({ user, firebaseUser });
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    register: async (email: string, password: string, displayName?: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            const user: User = {
                id: firebaseUser.uid,
                email: firebaseUser.email!,
                displayName: displayName,
                createdAt: new Date(),
            };

            set({ user, firebaseUser });
        } catch (error) {
            console.error('Register error:', error);
            throw error;
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
            set({ user: null, firebaseUser: null });
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    },

    initializeAuth: () => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                const user: User = {
                    id: firebaseUser.uid,
                    email: firebaseUser.email!,
                    displayName: firebaseUser.displayName || undefined,
                    createdAt: new Date(firebaseUser.metadata.creationTime!),
                };
                set({ user, firebaseUser, loading: false });
            } else {
                set({ user: null, firebaseUser: null, loading: false });
            }
        });

        return unsubscribe;
    },
}));
