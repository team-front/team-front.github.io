import { useState, useEffect } from "react";
import data from "../../data/product.json";
import Product from "./Product";
import styles from "../../assets/css/SellList.module.css";
import user_profile from "../../img/user_profile.png";
import Dropdown from "./Dropdown";
import Logo1 from "../../assets/img/Logo1.png"
import { Link, useLocation } from "react-router-dom";

/* 텍스트 아이콘 사용 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import LogoutBtn from "./LogoutBtn";

function SellList(){
    const [products, setProducts] = useState([]);
    
    const location = useLocation();

    const name = location.state.name;
    const pnumber = location.state.pnumber;

    useEffect(() => {
        setProducts(data);
    }, []);

    let [visible, setVisible] = useState(8)
    let [count, setCount] = useState(1)

    const countNumber=()=>{
        setCount(count++)
        console.log(count)
        setVisible(count*visible)
        console.log(visible)
    }

    const [view, setView] = useState(false);

    localStorage.setItem("SellList", '1');

    return(
        //console.log(products)
        <div className={styles.outline}>
            {localStorage.getItem("Login")=='1'?<LogoutBtn/>:""}
            <div className={styles.header}  style={{cursor: 'pointer'}}>
            <Link style={{color: 'black'}} to='/' state={{name : name, pnumber : pnumber} }>
                <span>보따리</span>
                <img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
            </Link>
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
            <ul onClick={() => {setView(!view)}} className={styles.banner}>
                상품분류: 건강/의료용품 {' '}
                {view ?<FontAwesomeIcon icon={faCaretUp} /> :<FontAwesomeIcon icon={faCaretDown} />}
                {view && <Dropdown />}
            </ul>
            {/* <div className={styles.banner}>
                상품분류: 건강/의료용품 {"   "}
                <FontAwesomeIcon icon={faCaretDown} /> 
            </div> */}
            <div className={styles.container}>
                <div className={styles.products}>
                    {products.slice(0, visible).map((product) => (
                        <Product
                            key={product.title}
                            id={product.title}
                            img={product.src}
                            title={product.title}
                            price={product.price}
                            text=''
                        />
                    ))}
                </div>
                
            </div>
            <div className={styles.flex}>
            <button className={styles.moreBtn} onClick={countNumber} style={(visible===64)?{display:"none"}:{display:""}}>눌러서 상품 더보기</button>
            </div>
        </div>
    );
}

export default SellList;