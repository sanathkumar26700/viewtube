import { createContext, useContext, useReducer } from 'react';
import {useEffect} from 'react';
import {dataReducer} from '../Reducers/dataReducer'
import {getAllVideos} from '../Utilities/JS/dataHandlers/videoDataHandlers'
import {getAllCategories} from '../Utilities/JS/dataHandlers/categoryDataHandlers'


const dataContext = createContext()

const DataContextProvider =({children}) =>{

    const [data, dataDispatch] =  useReducer(dataReducer,
        {   videoData : [],
            categoryData : [],
            selectedCategory : '',
            isLoading: true,
            searchFor : ''
})
    
    useEffect(() =>{
        getAllVideos(dataDispatch)
        getAllCategories(dataDispatch)
    },[])

    return(<dataContext.Provider value={{data, dataDispatch}}>{children}</dataContext.Provider>)
}
const useDataContext = () => useContext(dataContext);

export {useDataContext, DataContextProvider}
