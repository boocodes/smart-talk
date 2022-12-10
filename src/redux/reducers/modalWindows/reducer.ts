import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {ModalWindowsInterface} from '../../../';


const initialState:ModalWindowsInterface = {
    addNewWorkspaceModalFlag: false,
}


interface ChangeModalsWindowFlag{
    flag: boolean;
}


export const modalWindowsReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeAddNewWorkspaceModalWindow: (state, {payload}: PayloadAction<ChangeModalsWindowFlag> ) =>{
            state.addNewWorkspaceModalFlag = payload.flag;
        }
    }
})

export const {changeAddNewWorkspaceModalWindow}  = modalWindowsReducer.actions;
export default modalWindowsReducer.reducer;