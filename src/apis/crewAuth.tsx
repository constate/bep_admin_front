import axios from 'axios';

interface LoginCredentials {
    username: string | null;
    password: string | null;
}
export const getCrewLoginAuth = async (loginJson: LoginCredentials) => {
    const { username, password } = loginJson;
    try {
        const { data } = await axios.post(
            `https://dummyjson.com/auth/login`,
            {
                username,
                password,
                expiresInMins: 60,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

export const getCurrentCrewAuth = async (accessToken: string) => {
    try {
        const { data } = await axios.get(`https://dummyjson.com/auth/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};

export const getRefreshCrewAuth = async (accessToken: string) => {
    try {
        const { data } = await axios.post(
            `https://dummyjson.com/auth/refresh`,
            {
                expiresInMins: 60, // optional, defaults to 60
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            },
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
};
