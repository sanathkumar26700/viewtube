import axios from 'axios'
import { toast } from 'react-toastify'

const getAllPlaylistData = async(token, userDataDispatch) => {
    try{
        const response = await axios.get('/api/user/playlists',{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data?.playlists})
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
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data?.playlists})
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
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data?.history})
            toast.success('playlist deleted')
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

const getVideosFromPlaylistData = async(playlist, token, userDataDispatch) => {
    try{
        const response = await axios.get(`/api/user/playlists/${playlist._id}`,{headers : {authorization: token}});
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data?.playlists})
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
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data?.playlists})
            toast.success(`Video added to ${playlist.name}`)
        }
    }catch(err) {
        toast.error('Something went wrong')
    }
}

const deleteVideoFromPlaylistData = async(playlist, video, token, userDataDispatch) => {
    try{
        const response = await axios.delete(
            `/api/user/playlists/${playlist._id}/${video._id}`,
            { headers: { authorization: token } })
        if(response.status === 200){
            userDataDispatch({type : 'PLAYLIST_DATA', payload : response?.data?.history})
            toast.success('Video removed from playlist')
        }
    }catch(err) {
        toast.error('Oops, something went wrong!')
    }
}

export {getAllPlaylistData, addPlaylistToData, deletePlaylistFromData, getVideosFromPlaylistData, addVideoToPlaylistData, deleteVideoFromPlaylistData}
