import {useState} from 'react'

export const SearchMenu = () => {
  const [price, setPrice] = useState(0)
  const [showCat, setShowCat] = useState(false)
  const [showCol, setShowCol] = useState(false)
  const [serachS, setSearchS] = useState('')
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={`${showModal ? "show-sometimes overflow-y-hidden" : "hidesometimes overflow-y-hidden" } text-lg my-16 bg-amber-100 rounded-t-3xl`}>
      <div className='p-2 pt-6 pl-6 rounded-t-3xl border border-black'>
        <input type="text" value={serachS} onChange={(e)=>setSearchS(e.currentTarget.value)} className='w-5/6 border border-black rounded-2xl p-1 focus:outline-none'/>
        { showModal ? <button className='ml-4 select-none' onClick={()=>setShowModal(false)}>X</button> :
        <button className='ml-4 select-none' onClick={()=>setShowModal(!showModal)}>&#8593;</button>}
      </div>
      <div className={showModal ? "slide-menu overflow-y-scroll" : "hide-menu"}>
        <div className='px-6'>
          <h6 className='font-bold '>Price</h6>
          <p className='  text-center	'>{`$${price}`}</p>
            <input type="range" min="1" max="100" value={price} className=" w-full focus:outline-none in-range:border-green-500" id="myRange" onChange={(e)=>setPrice(e.currentTarget.value)} style={{backgroundColor: 'blue'}}/>
            <div className='flex justify-between'>
              <p> $0 </p>
              <p> +$100</p>
            </div>
          <div className='font-bold'>
            <h6 className='  '>Size</h6>
            <div className='grid grid-cols-4 gap-5 text-center capitalize text-white'>
              <p className='bg-teal rounded-md'>XXS</p>
              <p className=' bg-teal rounded-md'>XS</p>
              <p className=' bg-teal rounded-md'>S</p>
              <p className=' bg-teal rounded-md'>M</p>
              <p className=' bg-teal rounded-md'>L</p>
              <p className=' bg-teal rounded-md'>XL</p>
              <p className=' bg-teal rounded-md'>XXL</p>
              <p className=' bg-teal rounded-md'>XXXL</p>
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
              <p className=' bg-teal rounded-md'>Activewear</p>
              <p className=' bg-teal rounded-md'>blazers</p>
              {showCat &&
              <>
                <p className='bg-teal rounded-md'>jeans</p>
                <p className=' bg-teal rounded-md'>dresses</p>
                <p className=' bg-teal rounded-md'>pants</p>
                <p className=' bg-teal rounded-md'>tops</p>
                <p className=' bg-teal rounded-md'>shoes</p>
                <p className=' bg-teal rounded-md'>rompers</p>
                <p className=' bg-teal rounded-md'>jackets</p>
                <p className=' bg-teal rounded-md'>sweaters</p>
                <p className=' bg-teal rounded-md'>Shorts</p>
                <p className=' bg-teal rounded-md'>Suits</p> 
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
              <p className=' bg-teal rounded-md'>black</p>
              <p className=' bg-teal rounded-md'>white</p>
              <p className=' bg-teal rounded-md'>gold</p>
              <p className=' bg-teal rounded-md'>silver</p>
              {showCol &&
              <>
                <p className=' bg-teal rounded-md'>brown</p>
                <p className=' bg-teal rounded-md'>red</p>
                <p className=' bg-teal rounded-md'>orange</p>
                <p className=' bg-teal rounded-md'>yellow</p>
                <p className=' bg-teal rounded-md'>green</p>
                <p className=' bg-teal rounded-md'>blue</p>
                <p className=' bg-teal rounded-md'>purple</p>
                <p className=' bg-teal rounded-md'>pink</p>
              </>
              }
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
