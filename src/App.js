import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/Sidebar/sidebar"
import NavBarRoutes from "./Routes/navbar-routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/footer'

function App() {
    return ( 
    <div className = "App" >
        <main className = "main">
            <Navbar/>
            <section className = "main--content">
                <Sidebar/>
                <NavBarRoutes/>
            </section>
            <ToastContainer 
                className="toastify"
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </main>
        <Footer/>
    </div>
    );
}

export default App;