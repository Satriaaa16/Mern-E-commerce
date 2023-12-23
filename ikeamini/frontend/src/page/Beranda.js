import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../components/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../components/CardFeature'
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'
import {FaKitchenSet} from 'react-icons/fa6'
import FilterProduct from '../components/FilterProduct'
import AllProduct from '../components/AllProduct'

const Beranda = () => {
  const productData = useSelector((state)=>state.product.productList)
  console.log(productData)
  const homeProductCartList = productData.slice(1,5);
  const homeProductCartListLaundry = productData.filter(el =>el.category ==='laundry',[])
  console.log(homeProductCartListLaundry)

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()
  const  nextProduct = () =>{
    slideProductRef.current.scrollLeft += 200
  }
  const preveProduct = () =>{
    slideProductRef.current.scrollLeft -= 200
  }

  const categoryList = [...new Set(productData.map(el=>el.category))]
  console.log(categoryList)
  // filter data display
  
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
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-blue-500 w-36 px-2 items-center rounded-full'>
             <p className='text-sm font-medium text-slate-950'> Pengiriman</p>
             <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-2-5/64/x-07-1024.png " className='h-7'/>
          </div>
          <h2 className="text-4xl md:text-7x1 font-bold py-3">Barang Berkualitas Bergaransi <span className='text-blue-500 text-'> IKEA</span><span className='text-yellow-500 text-'>MINI</span></h2>
         <p className="py-3 text-base">In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a plaent or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</p>
         <button className="font-bold bg-red-500 text-white px-3 py-2 rounded-md">Pesan Sekarang</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] ? 
            homeProductCartList.map(el =>{
              return(
                <HomeCard
                  key={el.id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  description={el.description}
                />
             );
            })
            :
            loadingArray.map((el,index)=>{
              return(
                <HomeCard
                  key={index}
                  loading={"Memuat..."}
                />
              )
            })
          }
        </div>

        <div>
            <AllProduct/>
        </div>
      </div>

      <div className=''>
          <div className='flex w-full items-center'>
             <h2 className='font-bold text-2xl text-slate-700 mb-4'>
              Ruangan Laundry
             </h2>
             <div className='ml-auto flex gap-4'>
                <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
                <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
             </div>
          </div>
          <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"ref={slideProductRef}>
            {homeProductCartListLaundry[0] ? homeProductCartListLaundry.map( el=>{
                return(
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    image={el.image}
                    price={el.price}
                    description={el.description}
                  />
                )
              })
             :
             loadingArrayFeature.map(el =><CardFeature loading="Memuat..."/>)
            }
          </div>
      </div>

            <div className='my-5'>
              <h2 className='font-bold text-2xl text-slate-700 mb-4'>
                Produk kami
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
      </div>


  )
}

export default Beranda