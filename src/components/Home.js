import { NavLink, Outlet } from "react-router-dom";
import './styles/Home.css'

function Home() {

    return (
        <div className="home-container">
            <h1 className="title">
                Welcome to the NCAA Sports Hall of Fame.
            </h1>
            <p className="home-content">
                Click the link below to see the inductees.
            </p>
            <NavLink style={({isActive}) => isActive ? {backgroundColor: "#e53170"} : undefined } className="link-btn" to={'/users'}>Have at it.</NavLink>
            <Outlet />
        </div>
    )
}

export default Home;