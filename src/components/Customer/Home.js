import { Link, useNavigate } from "react-router-dom";
import '../../assets/css/Home.css';
import Logo1 from "../../assets/img/Logo1.png";
import CarouselMain from "./Carousel";
import character1 from '../../img/character1.png'
import character2 from '../../img/character2.png'

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/Login");
    }

  return (
    <div className="Home">
      <div className="Home-right">
      <header className="Home-header">
        <img src={character1} style={{width:'50px', height:"50px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
          <p>
            보따리
          </p>
          <div>전화로 주문하는 만물상점</div>
      </header>




    <div className="down-header">
        <div className="menu-wrap">
        <div className="Home-menu">
          <div className="Home-menu1" onClick={goToLogin}>
          <div className="homelogo">
                
              </div>
            <span className="hometag">로그인/회원가입하기</span>
          </div>
          <Link to="/selllist" style={{color:"black"}}><div className="Home-menu2">
            <div className="homelogo">
                  
                </div>
              <div className="hometag">
                구매하기
              </div>
              </div>
          </Link>
          <Link to="/info" style={{color:"black"}}>
            <div className="Home-menu3">
            <div className="homelogo">
                </div>
              <div className="hometag">
                유의사항
              </div>
              </div>
          </Link>
        </div>
        </div>
        <div className="Home-bottom"/>
        {/* <div className="Home-blogo">
          작은 로고<br/>
          서비스명
        </div> */}
              <div className="Homeflex">
        <CarouselMain style={{width: "40%"}}/>
        </div>
      </div>


      </div>
    </div>
  );
}

export default Home;