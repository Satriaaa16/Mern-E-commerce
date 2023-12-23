import React, { useEffect, useState } from 'react'
import CardFeature from './CardFeature'
import FilterProduct from './FilterProduct'
import { useSelector } from 'react-redux'
import { setDataProduct } from '../redux/productSlide'

const AllProduct = ({heading}) => {
    const productData = useSelector((state)=>state.product.productList)
    const categoryList = [...new Set(productData.map(el=>el.category))]

    const [filterby,setFilterBy] = useState("")
    const [dataFilter,setDataFilter] = useState([])
  
    useEffect(()=>{
      setDataFilter(productData)
    },[productData])
    
    const handleFilterProduct = (category)=>{
        const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
        setDataFilter(()=>{
          return[
            ...filter
          ]
        })
      }
  
  return (
    <div>
        
        <div className='my-5'>
              <h2 className='font-bold text-2xl text-slate-700 mb-4'>
                
              </h2>
             <div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
                {/* Menggunakan "items-center" agar ikon berada di tengah secara vertikal */}
                <div className='flex flex-row gap-10'> {
          // Filter out duplicate categories using Set
                  [...new Set(categoryList)].map(el => (
                 <FilterProduct key={el} category={el} onClick={()=>handleFilterProduct(el)}></FilterProduct>
                )) }
              </div>
            </div>
            <div className='flex flex-wrap justify-center gap-4 shadow-sm rounded'>
                    {
                      dataFilter.map(el=>{
                        return(
                          <CardFeature
                              key={el._id}
                              id={el._id}
                              image={el.image}
                              name={el.name}
                              category={el.category}
                              price={el.price}
                              description={el.description}
                          />
                            
                          
                        )
                      })
                    }
            </div>
        </div>
        <AllProduct heading={"Produk yang kami tawarkan"}/>
    </div>
  )
}

export default AllProduct