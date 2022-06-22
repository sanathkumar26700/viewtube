export const userDataReducer = (state, action) =>{
    switch(action.type){

        case "HISTORY_DATA" : return {...state, historyData : action.payload}

        case "LIKED_DATA" : return {...state, likedData : action.payload}

        case "WATCHLATER_DATA" : return {...state, watchLaterData : action.payload}

        case "PLAYLIST_DATA" : 
        if( action.payload.playlists){
            return {...state, playlistData :  action.payload.playlists}
        }else{
            const newPlaylist = state.playlistData.map(playlist =>( 
                        playlist._id === action.payload.playlist._id ? 
                                            action.payload.playlist : playlist))
            return {...state, playlistData : newPlaylist}
        }

        default: return {...state}

    }
}