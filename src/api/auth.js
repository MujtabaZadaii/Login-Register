const DELAY_MS = 800;

const mockUsers = [
    {
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'Admin@1234',
        role: 'ADMIN',
    },
    {
        id: '2',
        name: 'Regular User',
        email: 'user@example.com',
        password: 'User@1234',
        role: 'USER',
    },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const authApi = {
    login: async ({ email, password }) => {
        await sleep(DELAY_MS);
        const user = mockUsers.find((u) => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const { password: _, ...userWithoutPass } = user;
        return {
            accessToken: 'mock-jwt-token-' + Date.now(),
            user: userWithoutPass,
        };
    },

    register: async ({ email, password, name }) => {
        await sleep(DELAY_MS);
        if (mockUsers.find((u) => u.email === email)) {
            throw new Error('User already exists');
        }

        const newUser = {
            id: String(mockUsers.length + 1),
            name,
            email,
            password, // In real app, never store plain text!
            role: 'USER', // Default role
        };

        mockUsers.push(newUser);

        const { password: _, ...userWithoutPass } = newUser;
        return {
            accessToken: 'mock-jwt-token-' + Date.now(),
            user: userWithoutPass,
        };
    },

    me: async () => {
        await sleep(DELAY_MS);
        // In a real app, we'd validate the token here.
        // For mock, we'll just return the first user or fail if no token context (handled in store)
        return {
            id: '1',
            role: 'ADMIN',
            name: 'Admin User',
            email: 'admin@example.com'
        };
    },

    logout: async () => {
        await sleep(500);
        return true;
    }
};
