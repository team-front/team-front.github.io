import { Link } from "react-router-dom";
import styles from "../../assets/css/Product.module.css";

/* 텍스트 아이콘 사용 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Product({id, img, title, price, text, name, pnumber}){
    return <div className={styles.product}>
        <img src={img} alt={title} className={styles.product_img} />
        <p className={styles.product_title}>{title}</p>
        <p className={styles.product_price}>{price}원</p>
        <button className={styles.product_btn}>
        <Link style={{color:'black'}} to={text===''? `/product/${id}`: '/info'}  state={{name : name, pnumber : pnumber} }>
            {text==='교환/환불 문의'? '교환/환불 문의 ' : '자세히 보기 '}
            {text===''&&<FontAwesomeIcon icon={faMagnifyingGlass} />}

        </Link></button>
    </div>;
}

export default Product;