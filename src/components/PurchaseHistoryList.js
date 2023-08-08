import "../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../assets/js/datatables-simple-demo.js";
import {DataTable} from "simple-datatables"
import { useState, useEffect } from "react";

function PurchaseHistoryList(props){

    // dummyPurchaseData
    const dummyPurchaseData = [
        ['2021-01-01', '중년여성 양말 세트', '서울시 OO구 OO로 11', '100000', '결제완료'],
        ['2021-02-01', '중년 남성 조끼', '서울시 OO구 OO로 11', '50000', '결제완료'],
        ['2021-03-01', '중장년 수면 바지', '서울시 xx구 OO로 23', '20000', '결제완료'],
        ['2021-04-01', '중년 여성 모자(1+1)', '서울시 OO구 OO로 11', '15000', '결제완료'],
        ['2021-05-01', '꽃무늬 바지', '서울시 OO구 OO로 11', '12000', '결제완료'],
        ['2022-06-01', '여성 목수건', '서울시 OO구 OO로 11', '5000', '결제완료'],
        ['2022-07-01', '중장년 여성 꽃무늬 스카프', '서울시 **구 OO로 46', '10000', '결제완료'],
        ['2022-08-01', '수동 접이식 여성 레이스 양산', '서울시 OO구 OO로 11', '34000', '결제완료'],
        ['2022-09-01', '생활건강용 사발 지팡이', '서울시 OO구 OO로 11', '28000', '결제완료'],
        ['2023-02-01', '진동 안마기', '서울시 OO구 OO로 11', '54000', '결제완료'],
        ['2023-04-01', '미끄럼방지 매트 10매', '서울시 OO구 OO로 11', '28000', '결제완료'],
        ['2023-06-01', '폴라폴리스 무릎 담요', '서울시 OO구 OO로 11', '9000', '결제완료'],
        ['2023-08-01', '고탄력 손목보호대 ', '서울시 OO구 xx로 88', '8000', '결제완료'],
    ];
    const dummyColumns = ["구매일자", "상품명", "주소", "결제액", "결제 상태", "교환/환불"];

    // window.addEventListener('DOMContentLoaded', event => {
    //     // Simple-DataTables
    //     // https://github.com/fiduswriter/Simple-DataTables/wiki

        
    //     const simpleDatatables = new DataTable('#datatablesSimple');
    //     console.log(simpleDatatables);
    // });

    useEffect(() => {
        let simpleDatatables = new DataTable('#datatablesSimple', {perPage:'10', sortable:true});
    });

    const [division, setDivision] = useState('이름');
    const [divisionDisplay, setDivisionDisplay] = useState('none');

    const divisonToggle = () => {
        if (divisionDisplay === 'none'){
            setDivisionDisplay('block');
            console.log(divisionDisplay);
        }
        else{
            setDivisionDisplay('none');
            console.log(divisionDisplay);
        }
    };

    

    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4" style={{textAlign:'left'}}>고객별 구매내역 목록</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active" style={{marginLeft:'5px'}}>Purchase History List</li>
            </ol>

            {/* 이름, 전화번호, 주소, 남은 충전액 뜨도록! */}

            <div className="card mb-4">
                <div className="card-header" style={{display:'flex', justifyContent: 'space-around'}}>
                    {/* <i className="fas fa-address-book me-1" style={{fontSize:'28px', position:'relative', top:'5px', paddingRight:'8px'}}></i>
                    
                    <div style={{position:'relative'}}>
                        <button className="btn2 me-2 dropdown-toggle" onClick={()=>divisonToggle()} >{division}</button>
                        
                        <ul className="collapse dropdown-menu2 dropdown-menu-end" style={{position:'absolute', top:'40px', left:'0px', fontSize:'13px', width:'50px', display:divisionDisplay}}>
                            <li className="dropdown-item2" style={{textAlign:'left'}}><button style={{backgroundColor:'transparent', border:'none'}} onClick={()=>{setDivision("이름"); setDivisionDisplay('none');}}>이름</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item2" style={{textAlign:'left'}}><button style={{backgroundColor:'transparent', border:'none'}} onClick={()=>{setDivision("전화번호"); setDivisionDisplay('none');}}>전화번호</button></li>
                        </ul>                    
                    </div> */}

                    {/* <span>{props.name}</span>
                    <span>{props.phone}</span>
                    <span>{props.restMoney}원</span> */}
                    <div style={{width:"90%", fontSize:'20px',  paddingTop: '5px'}}>
                        <div style={{float:'left', fontWeight: 'bold'}}>{props.name ? props.name:"김성대"}</div>
                        <div style={{float:'left', paddingTop:'5px', marginLeft: '5px', fontSize:'15px'}}>(전화번호 : {props.phone ? props.phone:"010-1111-1111"})</div>
                        <div style={{float:'right', paddingTop:'3px', paddingRight: '5px', fontSize:'17px'}}>
                            남은 충전액 : <span style={{fontWeight:'bold', color:'red'}}>{props.restMoney ? props.restMoney : "3000"}</span>원
                        </div>
                    </div>
                    <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{float: 'right'}}>추가</button>
                      
                    {/* <form className="d-none d-md-block form-inline me-0 me-md-3 my-2 my-md-0" style={{width:'60%'}}>
                        <div className="input-group" style={{paddingBottom:'2px'}}>
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch"/>
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button" style={{backgroundColor:"green"}}><i className="fas fa-search"></i></button>
                        </div>
                    </form> */}
                </div>

                <div className="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <tr>
                                {dummyColumns.map((column)=>(
                                        <th key={column} >{column}<i className="fas fa-sort" style={{paddingLeft:'5px'}}></i></th>
                                ))}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                {dummyColumns.map((column, index)=>(
                                        <th key={index} >{column}</th>
                                ))}
                            </tr>
                        </tfoot>
                        <tbody>
                            {dummyPurchaseData.map((data)=>{
                                return(
                                    <tr style={{textAlign:'left'}}>
                                        <td style={{textAlign:'left'}} key={data[0].toString()}>{data[0]}</td>
                                        <td style={{textAlign:'left'}} key={data[1].toString()}>{data[1]}</td>
                                        <td style={{textAlign:'left'}} key={data[2].toString()}>{data[2]}</td>
                                        <td style={{textAlign:'left'}} key={data[3].toString()}>{data[3]}</td>
                                        <td style={{textAlign:'left'}} key={data[4].toString()}>{data[4]}</td>
                                        <td>
                                            <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px'}}>교환</button>
                                            <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:"inline-block"}}>반품</button>                                            
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

};

export default PurchaseHistoryList;