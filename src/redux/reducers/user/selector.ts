import { RootState } from "../../store";

export const selectUserData = (state:RootState) => {
    return state.user;
}