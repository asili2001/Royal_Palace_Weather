import { createContext, useState, useEffect} from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(false);

    const loadingStart = () => {
        setLoading(true);
    }

    const loadingStop = () => {
        setLoading(false);
    }

    return (
        <LoadingContext.Provider value={{loading, loadingStart, loadingStop}}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext;