import * as types  from "../types";


export const saveInfoUser =(user) =>{
    return{
        type:types.SAVE_INFO_USER,
        payload:user
    }
}