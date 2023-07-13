import { useEffect, useState } from 'react'
import './Recommend.css'


function Recommend(){
    const [rec,setRec] = useState();
    // console.log(rec[0].title)
    useEffect(()=>{
        recommendFind()
    },[])
    const recommendFind = async() =>{
        const response = await fetch("https://fakestoreapi.com/products?limit=8")
        const JSONData = await response.json()
        setRec(JSONData)
    }
    return(
        <>
        <div className="recommendations">
            <div className="rec-heading">
            <h1>Recommended for you</h1>
            </div>
            <div className="rec-products-container">
                
                    {rec ?.map((recproduct) =>{
                        return(
                            <>
                            <div className="recom-products">
                                <div className='recom-products-content'>
                                    <div className='rectimg'><img id='rectimg' src={recproduct.image} alt={recproduct.id}></img></div>
                                    <div className='recTitle'>{recproduct.title}</div>
                                    <div className='recPrice'>${recproduct.price}</div>
                                </div>
                            </div>
                            </>
                        )
                    })}
                
            </div>
        </div>
        </>
        
    )
}
export default Recommend