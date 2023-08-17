import Gui from "./layoutdashboard";
import {Mprofile} from "./mprofile";

export default function Layout() {
  return (
    <>
      <div className="margin-top">
        <div className="container-fluid margin-top">
          <div className="row">
            <div className="d-none d-sm-block d-md-block d-lg-block  col-lg-3 col-sm-3 ">
              
            <Mprofile />
       
            </div>
          
            <div className="col-sm-9 col-md-9 gui-layout">
              <Gui />
            </div>
            <div className="col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}