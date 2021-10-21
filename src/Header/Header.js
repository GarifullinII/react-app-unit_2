import Nav from "./Nav";

function Header(props) {
    return (
        <header>
            <h1>{props.propssite.site_name}</h1>
            <h2>{props.propssite.site_title}</h2>
            <Nav propsnav = {props.propssite.nav} />
        </header>
    );
}

export default Header;