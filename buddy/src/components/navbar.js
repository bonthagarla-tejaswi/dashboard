import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CIcon from '@coreui/icons-react';
import { cilPuzzle,cilSpeedometer,cilHamburgerMenu } from '@coreui/icons';
import {
  CNavItem,
  CSidebarNav,
  CSidebarBrand,
  CSidebarToggler,
  CSidebar,
  CNavGroup,
  CBadge,
  CNavTitle
} from "@coreui/react"

function Navtop() {
  return (
    <Navbar className="bg-body-tertiary navbar-fixed">
      <Container>
      <div className=''>
      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
     <cilHamburgerMenu />
      </a>
     
      </div>
        <Navbar.Brand href="/">buddy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <a href="/profile" className='text-decoration-none profile-logo'><img src='http://mecap.in/assets/anilimg.jpeg' alt='user'/></a> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtop;