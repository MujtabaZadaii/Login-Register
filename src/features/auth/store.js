import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            accessToken: null,
            isAuthenticated: false,

            setAuth: (user, token) => set({
                user,
                accessToken: token,
                isAuthenticated: !!user
            }),

            logout: () => set({
                user: null,
                accessToken: null,
                isAuthenticated: false
            }),

            hydrate: () => {
                // If using persist middleware, this might handle itself mostly, 
                // but we can add custom logic if needed.
                const state = get();
                if (state.user && state.accessToken) {
                    set({ isAuthenticated: true });
                }
            }
        }),
        {
            name: 'auth-storage', // name of the item in the storage (must be unique)
            partialize: (state) => ({ user: state.user, accessToken: state.accessToken }), // only persist user and token
        }
    )
);
