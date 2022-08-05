import React, {useState} from 'react';

const initialState = {
    isLoaded: false,
    query: '',
    sort: 'best-match',
    error: null,
    data: [],
    totalCount: 0
}

export const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    const value = {
        state,
        setState
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;