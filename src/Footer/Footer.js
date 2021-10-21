import Nav from "../Header/Nav";

function Footer(props) {
    return (
        <footer>
            <h3>{props.propssite.site_name}</h3>
            <Nav propsnav = {props.propssite.nav} />
        </footer>
    );
}

export default Footer;