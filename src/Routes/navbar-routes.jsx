import {Routes, Route} from "react-router-dom"; 
import Home from "../Pages/Home/home";
import Likes from "../Pages/Likes/likes";
import WatchLater from "../Pages/WatchLater/watch-later"
import Playlist from "../Pages/Playlist/playlist"
import History from "../Pages/History/history"
import VideoPlayer from "../Pages/Videoplayer/video-player"
import Login from "../Pages/Authentication/login-page";
import SignUp from "../Pages/Authentication/sign-up";
import MockAPI from "../Components/Mockman/mock-man";
import AuthorizedRoutes from "../Routes/authorized-routes"

function NavBarRoutes() {
    return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/login-page" element={<Login/>}/>
        <Route path = "/signup-page" element={<SignUp/>}/>

        <Route element = {<AuthorizedRoutes/>}>
            <Route path = "/likes" element={<Likes/>}/>
            <Route path = "/watch-later" element={<WatchLater/>}/>
            <Route path = "/playlist" element={<Playlist/>}/>
            <Route path = "/history" element={<History/>}/>
            <Route path = "/video" element={<VideoPlayer/>}/>
        </Route>

        <Route path = "/mockman-api" element={<MockAPI/>}/>
    </Routes>
    );
}

export default NavBarRoutes;