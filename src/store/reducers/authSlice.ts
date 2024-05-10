import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface UserInfo {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string | null;
}

interface CrewAuthState {
    userInfo: UserInfo | null;
    userToken: string | null;
}

const initialState: CrewAuthState = {
    userInfo: null,
    userToken: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCrewAuth: (state, action) => {
            console.log(state.userInfo);

            state.userInfo = action.payload;
            console.log(state.userInfo);
            if (action.payload.token) {
                localStorage.setItem(
                    'BEP_ADMIN_ACCESS_TOKEN',
                    action.payload.token,
                );
            }
        },
        initAuth: (state) => {
            state.userInfo = null;
            localStorage.removeItem('BEP_ADMIN_ACCESS_TOKEN');
        },
    },
});

export const { setCrewAuth, initAuth } = authSlice.actions;

export default authSlice.reducer;
