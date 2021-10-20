import Nav from "../Header/Nav";

function Footer({...site}) {
    return (
        <footer>
            <h3>{site.name}</h3>
            <Nav props={site.nav}/>
        </footer>
    );
}

export default Footer;