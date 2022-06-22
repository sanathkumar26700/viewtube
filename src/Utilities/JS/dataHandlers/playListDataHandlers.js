import axios from 'axios'
import { toast } from 'react-toastify'

const getAllPlaylistData = async(token, userDataDispatch) => {
    try{
        const response = await axios.get('/api/user/playlists',{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data})
        }
    }catch(err){
        toast.error('Something went wrong')
    }
}

const addPlaylistToData = async(playlist, token, userDataDispatch) => {
    try{
        const response = await axios.post(
            "/api/user/playlists",
            { playlist },
            { headers: { authorization: token } })
        if(response.status === 201){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data})
            toast.success(`${playlist.playlistTitle} created`)
        }
    }catch(err) {
        toast.error('Something went wrong')
    }
}

const deletePlaylistFromData = async(playlist, token, userDataDispatch) => {
    try{
        const response = await axios.delete(
            `/api/user/playlists/${playlist._id}`,
            { headers: { authorization: token } })
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data})
            toast.success(`${playlist.playlistTitle} deleted`)
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

const getVideosFromPlaylistData = async(playlist, token, userDataDispatch) => {
    try{
        const response = await axios.get(`/api/user/playlists/${playlist._id}`,{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data})
        }
    }catch(err){
        toast.error('Something went wrong')
    }
}

const addVideoToPlaylistData = async(playlist, video, token, userDataDispatch) => {
    try{
        const response = await axios.post(
            `/api/user/playlists/${playlist._id}`,
            { video },
            { headers: { authorization: token } })
        if(response.status === 201){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data})
            toast.success(`${video.title} added to ${playlist.playlistTitle}`)
        }
    }catch(err) {
        console.log(err)
    }
}

const deleteVideoFromPlaylistData = async(playlist, video, token, userDataDispatch) => {
    try{
        const response = await axios.delete(
            `/api/user/playlists/${playlist._id}/${video._id}`,
            { headers: { authorization: token } })
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data})
            toast.success(`${video.title} removed from ${playlist.playlistTitle}`)
        }
    }catch(err) {
        console.log(err)
    }
}

export {getAllPlaylistData, addPlaylistToData, deletePlaylistFromData, getVideosFromPlaylistData, addVideoToPlaylistData, deleteVideoFromPlaylistData}
