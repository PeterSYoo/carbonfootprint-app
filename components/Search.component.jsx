import {useState} from 'react'
import Link from 'next/link';


export const Search = ({inputS, searchBy, sortValue, sortResults, handleSearch , setSortValue , setInputS,setSearchBy}) => {
  
  return (
    <div>
      <form className="" onSubmit={(e)=>{e.preventDefault(e);handleSearch(searchBy, inputS) }}>
        <label htmlFor='field'> Find by </label>
				<select name="field" value={searchBy} onChange={(e)=> setSearchBy(e.currentTarget.value)}>
					<option value="name">Name</option>
					<option value="brand">Brand</option>
					<option value="occasion">Category</option>
          <option value="color">Color</option>
				</select>
        <input type="text"
        name="str"
        value={inputS}
        onChange={(e)=>setInputS(e.currentTarget.value)}
         />
				<button className=''>Find</button>
			</form>
      <form className="" onSubmit={(e)=>{e.preventDefault(e); sortResults(sortValue)}}>
        <label htmlFor='field'> Sort by </label>
				<select name="field" value={sortValue} onChange={(e)=> setSortValue(e.currentTarget.value)}>
					<option value="name">Name</option>
					<option value="brand">Brand</option>
					<option value="occasion">Category</option>
					<option value="price">Price</option>
          <option value="color">Color</option>
				</select>
				<button className=''>Find</button>
			</form>
      {/* {foundItems?.map((clothes) => (
          <Fragment key={clothes._id}>
            <div className="flex flex-col w-full">
              <Link href={`/browse/${clothes._id}`}>
                <div className="bg-gray-300 h-36"></div>
                <div className="flex justify-center">{clothes.name}</div>
              </Link>
            </div>
          </Fragment>
        ))} */}
    </div>
  )
}
