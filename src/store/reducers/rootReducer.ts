import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
    userAuth: authReducer,
});

export default rootReducer;
