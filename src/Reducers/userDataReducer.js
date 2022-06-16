export const userDataReducer = (state, action) =>{
    switch(action.type){

        case "HISTORY_DATA" : return {...state, historyData : action.payload}

        default: return {...state}

    }
}