import { createContext, useState, useEffect, ReactNode, useReducer} from "react";
import { LoadingActionTypes } from "../model";


interface Props {
    isLoading: boolean,
    startLoading : ()=> void,
    endLoading : ()=> void
}


const LoadingContext = createContext<Props>(null as any);


const loadingReducer = (state: boolean, action : LoadingActionTypes)=>{
    switch(action.type){
        case "START":
            return true;
        case "END":
            return false;
        default:
            return state;
    }
}

export const LoadingProvider = ({children}: {children: ReactNode}) => {
    const [isLoading, dispatch] = useReducer(loadingReducer, true);

    //handlers
    const startLoading = () => {
        dispatch({type: "START"});
    }
    const endLoading = () => {
        dispatch({type: "END"});
    }


    return (
        <LoadingContext.Provider value={{isLoading, startLoading, endLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext;