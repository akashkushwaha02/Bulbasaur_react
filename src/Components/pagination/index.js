import React from 'react'
import './style.css'
export default function Pagination(props) {
    const {
        itemCount=10,
        pageNumber=1,
        totalItems=20,
    } = props;

    let handlePagination =((type)=>{
        console.log(type,'----pagination')
    })

    let handlePage = ((pageNumber)=>{
        console.log(pageNumber,'--------');
    })

    let totalPages = Math.ceil(totalItems/itemCount);
    let activePage = 1;
    let arrDummy = [];
    arrDummy.length = totalPages;
    let elements =[];
    for(let i=0;i<arrDummy.length;i++){
        // push the component to elements!
       elements.push(<li key={i} onClick={()=>handlePage(i)} className="margin-point">{i+1}</li>);
   }
return (
        <>
            {
                // item count - 10
                // page number - default 1
                // total count - 10
                // next ->  <- previous function
            }
            <span onClick={()=>handlePagination('previous')}>Previous</span>
                <ul className='d-flex-style-none'>
                    {
                        elements
                    }
                </ul>
            <span onClick={()=>handlePagination('next')}>Next</span>
        </>
    )
}
