import { Link, useNavigate } from "react-router-dom";
import '../../assets/css/Home.css';
import Logo1 from "../../assets/img/Logo1.png";

function Home() {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/Login");
    }

  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          보 따 리<img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
        </p>
        <p className="sub-title">전화로 원하는 상품을 간편히!</p>
      </header>
      {/* <div className="Home-line">
        <hr/>
      </div> */}
      <div className="Home-menu">
        <div className="Home-menu1" onClick={goToLogin}>
          로그인/회원가입
        </div>
        <Link to="/selllist" className="Home-menu2">
          <div>
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
  );
}

export default Home;
