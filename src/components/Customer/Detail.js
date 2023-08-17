import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import data from "../../data/product.json";
import styles from "../../assets/css/Detail.module.css";
import { Link } from "react-router-dom";
import user_profile from "../../img/user_profile.png";
import LogoutBtn from './LogoutBtn';
import Logo1 from "../../assets/img/Logo1.png"


function Detail(){
    const {id} = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    const name = localStorage.getItem("Login") == '1' ? location.state.name : "";
    const pnumber = localStorage.getItem("Login") == '1' ? location.state.pnumber : "";

    const [detail, setDetail] = useState([]);
    useEffect(() => {
        setDetail(data);
    }, []);

    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    for (var i=0; i<detail.length; i++){
        if (`${id}` == detail[i]["title"]) {
            return <div className={styles.outline}>
             {localStorage.getItem("Login")=='1'?<LogoutBtn/>:""}
                <div className="My-header" style={{cursor:'pointer'}} onClick={goToHome}>
                    <span>보따리</span><img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
                </div>

                <div className={styles.user_info}>
                    <div>
                        <img src={user_profile} alt="" width="100px" height="100px" />
                    </div>
                    <div>
                        <p className={styles.ps}><strong>이름</strong>: 홍길동</p>
                        <p className={styles.ps}><strong>전화번호</strong>: 010-1234-5678</p>
                        <p className={styles.ps}><strong>주소</strong>: 서울특별시 종로구 성균관로 25-2 (성균관대학교)</p>
                    </div>
                </div>
                <div className={styles.container}>

                <div className={styles.left}>
                    <img src={detail[i]["src"]} alt={detail[i]["title"]} className={styles.detail_img}/>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>{detail[i]["title"]}</p>
                    <hr />
                    <p className={styles.price}> {detail[i]["price"]}원</p>
                    <p className={styles.color_code}>{detail[i]["color"]}</p>
                    <div className={styles.buttons}>
                            <Link to={'/info'}>
                            <button className={styles.buyBtn}>
                                전화로 주문하기
                            </button></Link>
                            <br />
                            <a href={detail[i]["a"]} target='_blank'>
                            <button className={styles.visitBtn}>
                                <span className={styles.visitBtnWhite}>웹사이트 방문하기</span>
                            </button></a>
                    </div>
                </div>
                </div>
            </div>
        }
    }
}

export default Detail;