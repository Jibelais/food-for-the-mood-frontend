import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <Link to={`/foodmood`}><img id = "logo" src="/img/logo.png"alt="icon"/></Link>

            <nav>
            <Link to={`/`}>About</Link>
            <Link to={`/foodmood`}>Mood</Link>
            <Link to={`/foodmood/new`}>Add Food</Link>
            </nav>
        </header>
    )
}

export default Header