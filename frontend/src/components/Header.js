import { Container, Navbar } from 'react-bootstrap';

const navBarStyle = {
    backgroundColor: 'lightgoldenrodyellow',
};

function Header(props) {
    return (
        <Navbar style={navBarStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
