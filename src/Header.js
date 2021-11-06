import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link class="navbar-brand" to="">EuCompraria</Link>
                    <Nav className="ms-auto">
                        <Link class="nav-link" to="/cadastrar-produto">Cadastrar produto</Link>
                        <Link class="nav-link" to="/atualizar-produto">Atualizar produto</Link>
                        <Link class="nav-link" to="/entrar">Entrar</Link>
                        <Link class="nav-link" to="/registrar">Registrar</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header