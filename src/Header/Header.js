import Nav from "./Nav";

function Header({...site}) {
    return (
        <header>
            <h1>{site.name}</h1>
            <h2>{site.map}</h2>
            <Nav/>
        </header>
    );
}

export default Header;