import { useEffect, useState } from 'react'
import './Products.css'
import searchico from './search.png'
import filterico from './filter.png'
import list from './list.png'
import column from './column.png'

function Products(){
    const [store,setStore]=useState([])
    const [category,setCategory]=useState([])
    // console.log("cat"+category[0])
    useEffect(()=>{
        fakeStore()
    },[])
    useEffect(()=>{
        fakeCategory()
    },[])
    const fakeStore = async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const JSONData = await response.json()
        setStore(JSONData)
    }
    const fakeCategory= async() =>{
        const respons= await fetch("https://fakestoreapi.com/products/categories")
        const JSONData = await respons.json()
        setCategory(JSONData)
    }
    const search = async() =>{
        var searchValue=document.getElementById("search").value
        console.log(searchValue)

    }
    return(
        <div className='product-options'>
            <div className='options'>
                <div className='option-1'>
                    <div className='price-ico'>
                        <h3>Price</h3>
                        <img src={filterico} alt='filter' className='filter-icon'></img>
                    </div>
                    <div className='slider'>
                        <input type="range" min="1" max="100" defaultValue="50"  id='slider'></input>
                    </div>
                    <div className='Range'>
                        <h4>Range</h4>
                        <p></p>
                    </div>
                </div>
                <div className='option-2'>
                    <div className='color-ico'>
                        <h3>Color</h3>
                        <div className='color'>
                            <button className='color1'></button>
                            <button className='color2'></button>
                            <button className='color3'></button>
                            <button className='color4'></button> 
                            <button className='color5'></button>
                            <button className='color6'></button>
                            <button className='color7'></button>
                            <button className='color8'></button>


                        </div>
                    </div>
                </div>

                <div className='option-3'>
                    <h3>Categories</h3>
                    <div className='categories'>
                        {category.map((categories) =>{
                            return(
                                <>
                                <div className='fakecategory'>
                                    {categories}
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='load'>
                    <button className='btn-load'>Load More</button>
                </div>
                <div className='discount-box'>
                    <div className='discount-content'>
                        <div className='dis-heading'>March Discount</div>
                    
                        <div className='discount-percent'>
                            Upto 70% off for all items in March
                        </div>
                        <div className='discount-btn'>
                            <button id='discount-btn'>Got it ></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-search'>
                <div className='search'>
                    <input type='text' placeholder='Type product name' id='search'></input>
                    <button id='bt-search' onClick={search}><img src={searchico} alt='search' className='search-icon'></img></button>
                </div>
                <div className='sort-show-ico'>
                    <div className='show'>
                        
                        <h4 className='showing'>Showing 1-9 results</h4>
                    </div>
                    <div className='sort-ico'>
                        <p>Sort</p>
                        <button id='sort'>Newest</button>
                        <img src={list} alt='list' className='list'></img>
                        <img src={column} alt='column' className='column'></img>
                    </div>
                </div>
                <div className='products'>
                        
            
            {store.map((values) =>{
                return(
                    <>
                    <div className='containers'>
                            <div><img className='product-image' src={values.image} alt={values.id}></img></div>
                            <div className='category'>{values.category}</div>
                            <div className='title'> {values.title}</div>
                            <div className='price'>${values.price}</div>
                        
                        
                        </div>
                    
                    </>
                    )
            }
                
            )}
                    
                        <div className='pages'>
                            <button className='pagebefore2'>--</button>
                            <button className='pagebefore1'>-</button>
                            <button className='page1'>1</button>
                            <button className='page2'>2</button>
                            <button className='page3'>3</button>
                            <button className='page4'>4</button>
                            <button className='page5'>5</button>
                            <button className='pagedot'>...</button>
                            <button className='page10'>10</button>
                            <button className='pageafter1'>+</button>
                            <button className='pageafter2'>++</button>

                        </div>
                    </div>
                    
                </div>
                
        </div>
    )

}

export default Products