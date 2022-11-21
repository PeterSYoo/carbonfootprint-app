import {useState, useRef} from 'react'
import { MenuItem } from './MenuItem.component'

export const SearchMenu = ({ handleSearch, searchByPrice, showModal, setShowModal}) => {
  const [price, setPrice] = useState(0)
  const [showCat, setShowCat] = useState(false)
  const [showCol, setShowCol] = useState(false)
  const [serachS, setSearchS] = useState('')
  
  const handleChange= (e) => {
    setPrice(e.currentTarget.value)
    searchByPrice(e.currentTarget.value)
  }

  const handleNameChange = (e) =>{
    setSearchS(e.currentTarget.value)
    if (e.currentTarget.value){
      handleSearch("name", serachS)
    }else{
      handleSearch("name", "")
    }
  }

  return (
    <div className={`${showModal ? "show-sometimes overflow-y-hidden" : "hidesometimes overflow-y-hidden" } text-lg my-16 bg-beige rounded-t-3xl`}>
      <div className='p-2 pt-5 pl-6 rounded-t-3xl border border-black'>
        <input type="text" value={serachS} onClick={()=>setShowModal(true)} onChange={(e)=>{handleNameChange(e)}} className='w-5/6 border border-black rounded-2xl focus:outline-none'/>
        { showModal ? <button className='ml-4 select-none' onClick={()=>setShowModal(false)}> &#8593;</button> :
        <button className='ml-4 select-none' onClick={()=>setShowModal(!showModal)}> <img className="w-9 -mb-3" src="https://i.ibb.co/0svzzdD/no-bg.png"/></button>}
      </div>
      <div className={showModal ? "slide-menu overflow-y-scroll" : "hide-menu"}>
        <div className='px-6'>
          <h6 className='font-bold '>Price</h6>
          <p className='  text-center	'>{`$${price}`}</p>
            <input type="range" min="1" max="100" value={price} className=" w-full focus:outline-none in-range:border-green-500" id="myRange" onChange={(e)=>handleChange(e)} style={{backgroundColor: 'blue'}}/>
            <div className='flex justify-between'>
              <p> $0 </p>
              <p> +$100</p>
            </div>
          <div className='font-bold'>
            <h6 className='  '>Size</h6>
            <div className='grid grid-cols-4 gap-5 text-center capitalize text-white'>
              <MenuItem text={"XXS"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"XS"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"S"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"M"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"L"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"XL"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"XXL"} property={"size"} handleSearch={handleSearch}/>
              <MenuItem text={"XXXL"} property={"size"} handleSearch={handleSearch}/>
            </div>
          </div>

          <div>
            <div className='flex justify-between my-2'>
              <h6 className='font-bold   capitalize'>Category</h6>
              <button onClick={()=>setShowCat(!showCat)}>
                <img src="https://i.ibb.co/nPgx3QX/arrow.png" className='w-4' />
              </button>
            </div>
          
            <div className='grid grid-cols-2 gap-5 font-bold text-center capitalize text-white'>
              <MenuItem text={"Activewear"} property={"occasion"} handleSearch={handleSearch}/>
              <MenuItem text={"blazers"} property={"occasion"} handleSearch={handleSearch}/>
              {showCat &&
              <>
                <MenuItem text={"jeans"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"dresses"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"pants"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"tops"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"shoes"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"rompers"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"jackets"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"sweaters"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"shorts"} property={"occasion"} handleSearch={handleSearch}/>
                <MenuItem text={"Suits"} property={"occasion"} handleSearch={handleSearch}/>
              </>}
              

            </div>
          </div>
          <div className='font-bold'>
            <div className='flex justify-between my-2'>
              <h6 className='  capitalize'>Color</h6>
              <button onClick={()=>setShowCol(!showCol)}>
                <img src="https://i.ibb.co/nPgx3QX/arrow.png" className='w-4' />
              </button>
            </div>
            <div className='grid grid-cols-4 gap-5 text-center capitalize text-white'>
              <MenuItem text={"black"} property={"color"} handleSearch={handleSearch}/>
              <MenuItem text={"white"} property={"color"} handleSearch={handleSearch}/>
              <MenuItem text={"gold"} property={"color"} handleSearch={handleSearch}/>
              <MenuItem text={"silver"} property={"color"} handleSearch={handleSearch}/>
              {showCol &&
              <>
                <MenuItem text={"brown"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"red"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"orange"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"yellow"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"green"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"blue"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"purple"} property={"color"} handleSearch={handleSearch}/>
                <MenuItem text={"pink"} property={"color"} handleSearch={handleSearch}/>
              </>
              }
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
