import React from 'react';
import '../../assets/css/List.css'

// const ChList = {
//   contents: [
//     {
//       title: "충전 (우리카드)",
//       amount: "+ 10,000",
//       amount: "+ 10000",
//       date: "2023.08.05",
//     },
//     {
//       title: "사용",
//       amount: "- 5,000",
//       amount: "- 5000",
//       date: "2023.08.03",
//     },
//     {
//       title: "사용",
//       amount: "- 5,000",
//       amount: "- 5000",
//       date: "2023.08.03",
//     },
//     {
//       title: "사용",
//       amount: "- 5,000",
//       amount: "- 5000",
//       date: "2023.08.03",
//     },
//     {
//       title: "충전 (우리카드)",
//       amount: "+ 10,000",
//       amount: "+ 10000",
//       date: "2023.08.01",
//     },
//     {
//       title: "충전 (우리카드)",
//       amount: "+ 5,000",
//       amount: "+ 5000",
//       date: "2023.07.31",
//     }
//   ],
// };


const List = ({signedCusChargedList}) => {
    return (
    <div className='List-card'>
      {signedCusChargedList.map((el, index) => {
      return (
        <>
        <div className='List-box' key={index}>
            <div className='List-top'>
              <div className='List-title'>{el.title}</div>
              <span className='List-bank'>{el.bank}</span>
            </div>
            <div className="List-bottom">
                <div className={el.amount[0]=='+'?"List-amount charging":"List-amount used"}>{el.amount} 원</div>
                <div className="List-date">{el.date}</div>
            </div>
        </div>
        </>   
            )
        })
        }
        </div>
    );
};

export default List;