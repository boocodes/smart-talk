import {combineReducers} from '@reduxjs/toolkit';
import { userReducer } from './user';
import { ModalsWindowsReducer } from './modalWindows';

const rootReducer = combineReducers({
    user: userReducer,
    modalsWindow: ModalsWindowsReducer,
})


export default rootReducer;