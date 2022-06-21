import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.css'
import '../../Utilities/CSS/Utilities.css'


function Sidebar() {

    const {pathname} = useLocation()
    
    return (
        <aside className="sidebar--container ">
            <ul className="list-bulletless social-links side-shadow">
                <li className={pathname === '/home' || pathname === '/' ? `active--tab` : ''}>
                    <NavLink to="/home" className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="fas icon fa-home"></i>
                            </span>
                            <span className='icon--text'>Home</span>
                        </div>
                    </NavLink>
                </li>
                <li className={pathname === '/likes' ? `active--tab` : ''}>
                    <NavLink to="/likes" className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="far icon fa-thumbs-up"></i>
                            </span>
                            <span className="icon--text">Likes</span>
                        </div>
                    </NavLink>
                </li>
                <li className={pathname === '/history' ? `active--tab` : ''}>
                    <NavLink to="/history" className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="fas icon fa-history"></i>
                            </span>
                            <span className="icon--text">History</span>
                        </div>
                    </NavLink>
                </li>
                <li className={pathname === '/watch-later' ? `active--tab` : ''}>
                    <NavLink to="/watch-later" className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="fas icon fa-list"></i>
                            </span>
                            <span className="icon--text">Watch Later</span>
                        </div>
                    </NavLink>
                </li>
                <li className={pathname === '/playlists' ? `active--tab` : ''}>
                    <NavLink to="/playlists" className='nav-list--item'>
                        <div className="nav-list--item__icon--wrapper">
                            <span>
                                <i className="far icon fa-folder"></i>
                            </span>
                            <span className="icon--text">Playlist</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar