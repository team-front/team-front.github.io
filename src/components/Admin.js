import "../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminNavbar from "./Admin_Navbar";
import CustomerList from "./CustomerList";
import Footer from "./Footer";
import { useState } from "react";
import Sidebar from "./Sidebar";
import PurchaseHistoryList from "./PurchaseHistoryList";


function Admin(){
    const [navbarDisplay, setNavbarDisplay] = useState(1);

    return(
        <div>
           <AdminNavbar navbarDisplay={navbarDisplay} setNavbarDisplay={setNavbarDisplay}/>
           <div id="layoutSidenav">
                {navbarDisplay ? <Sidebar/> : ""}
                <div id="layoutSidenav_content">
                    <main>
                        {/* <CustomerList/> */}
                        <PurchaseHistoryList/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Admin;