import "./Header.css"
import { useState } from "react";


function Header() {
    const [classListNav, setClassListNav] = useState("mobile-nav");

    const handleClick = () => {
        if (classListNav === "mobile-nav") {
            setClassListNav("mobile-nav open-nav");
        } else {
            setClassListNav("mobile-nav");
        }
    }

    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img
                        className="logo"
                        src="https://cdn.pixabay.com/photo/2014/04/02/16/25/tree-307232_640.png"
                        alt="Logo"
                    />
                    <h2 className="title">ToDoList</h2>
                </div>
                <nav className="nav-bar">
                    <a href="/">Home</a>
                    <a href="/tasks">Tasks</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className="burger-menu" onClick={handleClick}>
                    <span></span><span></span><span></span>
                </div>
            </header>
            <nav className={classListNav}>
                <a href="/">Home</a>
                <a href="/tasks">Tasks</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </>
    );
}
export default Header;