import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../assets/css/Home.css';
import Logo1 from "../../assets/img/Logo1.png"
import { useState } from "react";

function HomeLog() {

    const navigate = useNavigate();
    const location = useLocation();

    // const name = location.state.name;
    // const pnumber = location.state.pnumber;

    const name = localStorage.getItem("Login")=='1' ? location.state.name : "";
    const pnumber = localStorage.getItem("Login")=='1' ? location.state.pnumber : "";

    // if(localStorage.getItem("Login")=='1'){
    //   setName(location.state.name);
    //   setPnumber(location.state.pnumber);
    // }

    // alert(name + pnumber);

    const goToMyPage = () => {
        navigate("/mypage", { state :{name : name, pnumber : pnumber} });
    }

    const Logout = ()=> {
        localStorage.setItem("Login",0); 
        navigate('/');
    }

    const goToLogin = () => {
      navigate("/Login");
    }

  return (
    <div className="Home" style={{overflow:'auto'}}>
      <header className="Home-header" >
      {/* <div className="Home-line">
        <hr/>
      </div> */}
        <p className="header-card">
          보 따 리<img className="LogoImg" src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
        </p>
        <p className="sub-title">전화로 원하는 상품을 간편히!</p>
      </header>
      <div className="logoutDiv" style={{display:localStorage.getItem("Login")=='1'? "block" : "none"}}>
        <button className="logout" onClick={()=>{Logout()}}>로그아웃</button>
      </div>
      <div className="Home-card">
      {/* <div className="Home-line">
        <hr/>
      </div> */}
      <div className="Home-menu">
        {
          localStorage.getItem("Login")=='1'? 
          <div className="Home-menu1" onClick={goToMyPage}>
            내 보따리 
          </div> :
          <div className="Home-menu1" onClick={goToLogin}>
            로그인/회원가입 
          </div>
        }
        
        <Link to="/selllist" className="Home-menu2">
          <div >
            구매하기
          </div>
        </Link>
        <Link to="/info" className="Home-menu3">
          <div >
            유의사항
          </div>
        </Link>
      </div>
      <div className="Home-bottom"/>
      {/* <div className="Home-blogo">
        작은 로고<br/>
        서비스명
      </div> */}
      </div>
    </div>
  );
}

export default HomeLog;
