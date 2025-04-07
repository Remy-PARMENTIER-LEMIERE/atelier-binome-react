import "./Header.css"



function Header() {
    return (
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
        </header>
    );
}
export default Header;