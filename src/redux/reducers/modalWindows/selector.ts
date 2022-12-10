import {RootState} from '../../../';

export const selectAddNewWorkspaceModalFlag = (state: RootState)=>{
    return state.modalsWindow.addNewWorkspaceModalFlag;
}