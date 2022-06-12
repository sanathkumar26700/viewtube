import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../../Context/authContext'
import { useDataContext } from '../../Context/dataContext'
import { toast } from "react-toastify";
import DarkModeButton from '../Dark mode/darkMode.jsx'

import "./navbar.css";
import '../../Utilities/CSS/social-links.css'
import '../../Utilities/CSS/Utilities.css'

function Navbar() {
    
    const navigate = useNavigate()
    const {auth:{isAuthorized}, setAuth} = useAuth()
    const {data : {searchFor}, dataDispatch} = useDataContext()

    const handleLogout = () =>{
        localStorage.removeItem('token')
        setAuth({
            token : '',
            isAuthenticated : false
        })
        toast.success('Logged out successfully !') 
    }

    return (
        <nav className="nav__container bottom-shadow">
            <div className=" logo ">
                <Link to="/home" className="anchor-style--none">
                    <span className="logo--title logo--title-black ">view<span className="dot ">tube</span>
                    <img src="https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/Compact_disc.svg.png?raw=true" alt=" noter--logo" className="logo--img img-responsive"/>
                    </span>
                </Link>
            </div>

            <div className="searchbar__container">
                <input 
                    className="input__field searchbar__input--field" 
                    type="search" 
                    placeholder="Search your note by title..." 
                    id="search--bar"
                    value = {searchFor}
                    onChange={(e) =>{
                        navigate("/notes")
                        dataDispatch({type : "SEARCH", payload : e.target.value})}}
                    /> 
                    <label htmlFor="search--bar">
                        {searchFor === "" ? <i className="fas fa-search icon btn"></i> : null}
                    </label>
            </div>

            <nav className="nav__container--nav-list">
                <ul className="list-bulletless nav-links">
                    {isAuthorized ? 
                    (<li>
                        <div onClick = {handleLogout} className="nav-list--item__icon--wrapper">
                            <span  className="nav-items btn btn__primary btn__primary--animated">Log Out</span>
                        </div>
                    </li>)
                    :
                    (<li>
                        <Link to="/login-page" className="nav-list--item">
                            <div className="nav-list--item__icon--wrapper">
                                <span  className="nav-items btn btn__primary btn__primary--animated">Login</span>
                            </div>
                        </Link>
                    </li>)}
                    <li>
                        <DarkModeButton/>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar