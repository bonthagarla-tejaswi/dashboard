import { cibDashlane, cibProbot, cilArrowThickBottom,cilGamepad, cilHamburgerMenu } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchBar2 from './searchbarInternal';

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='btn btn-success'>
        <CIcon icon={cilHamburgerMenu} className='anim-none ' size='md'/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} className="sidebar-off">
      <div className='bg-warning text-center'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >menu</Offcanvas.Title>
        </Offcanvas.Header>
        </div>
      
        <Offcanvas.Body>
        <div className="d-grid gap-2 text-left">
          <a href='/' className='btn-none sidebar-list'><CIcon icon={cibDashlane} className='anim-none'/> Dashboard</a>
        <div className='dropdown' >
         <a href='/games' className='btn-none sidebar-list '> <CIcon icon={cilGamepad} className='anim-none' size='lg'/> Games </a><span className='btn btn-outline-success d-sm-none'><CIcon icon={cilArrowThickBottom} className='anim-none'/></span>
         <div className="dropdown-content">
           <a href="/games/dicee">dicee</a>
           <a href="/games/game2">game 2</a>
           <a href="/games/game3">game 3</a>
          </div>
          </div>
         <a href='/profile' className='btn-none sidebar-list'><CIcon  icon={cibProbot} className='anim-none'/> profile</a>
         <SearchBar2 />
         </div>  
        </Offcanvas.Body>
        
      </Offcanvas>
      
    </>
  );
}

export default Sidebar;