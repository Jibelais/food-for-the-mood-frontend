import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <Link to={`/`}><img id = "logo" src="/img/logo.png"alt="icon"/></Link>

            <nav>
            <Link to={`/foodmood/about`}>About</Link>
            <Link to={`/`}>Mood</Link>
            <Link to={`/foodmood/new`}>Add Food</Link>
            <Link to={`/foodmood/list`}>List</Link>
            </nav>
        </header>
    )
}

export default Header