import { cibDashlane, cibProbot, cilGamepad, cilHamburgerMenu } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
        <div>
        <Offcanvas.Body>
        <div class="d-grid gap-2 text-left">
          <a href='/' className='btn-none sidebar-list'><CIcon icon={cibDashlane} className='anim-none'/> Dashboard</a>
         <a href='/games' className='btn-none sidebar-list'> <CIcon icon={cilGamepad} className='anim-none' size='lg'/> Games</a>
         <a href='/profile' className='btn-none sidebar-list'><CIcon  icon={cibProbot} className='anim-none'/> profile</a>

           
        </div>
          
        </Offcanvas.Body>
        </div>
      </Offcanvas>
      
    </>
  );
}

export default Sidebar;