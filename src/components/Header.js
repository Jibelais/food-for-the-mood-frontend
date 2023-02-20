import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <Link to={`/foodmood`}><img id = "logo" src="/img/logo.png"alt="icon"/></Link>

            <nav>
            <Link to={`/`}>Home</Link>
            <Link to={`/foodmood`}>Mood</Link>
            <Link to={`/foodmood/new`}>Add Ideas</Link>
            </nav>
        </header>
    )
}

export default Header