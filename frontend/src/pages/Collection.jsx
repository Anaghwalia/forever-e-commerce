import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relavent');

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value))
    {
      setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }
  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(showSearch && search)
    {
      productsCopy=productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0)
    {
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0)
    {
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy);
  }
const sortProduct=()=>{
  let fpCopy=filterProducts.slice();
  switch(sortType)
  {
    case  'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
      break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
        default:
          applyFilter();
          break;
  }
}

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products]);

useEffect(()=>{
  sortProduct()
},[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-gray-300">
      {/* Filter Panel */}
      <div className="min-w-[15rem]">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-xl my-2 flex items-center cursor-pointer gap-2 hover:text-gray-700 transition-colors duration-200"
        >
          FILTERS
          <img
            className={`h-3 transform transition-transform duration-300 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="toggle filter icon"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 rounded-md p-4 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-medium mb-3 text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" value="Men" onChange={toggleCategory} />
              <span>Men</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" value="Women" onChange={toggleCategory} />
              <span>Women</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" value="Kid" onChange={toggleCategory} />
              <span>Kids</span>
            </div>
          </div>
        </div>

        {/* Sub-Category Filter */}
        <div className={`border border-gray-300 rounded-md p-4 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-medium mb-3 text-gray-800">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" value="Topwear"  onChange={toggleSubCategory}/>
              <span>Topwear</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" value="Bottomwear" onChange={toggleSubCategory} />
              <span>Bottomwear</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" value="Winterwear"  onChange={toggleSubCategory}/>
              <span>Winterwear</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Sort feature */}
      <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
        <option value="relavent">Sort by: Relavent</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
      {
        filterProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))
      }
        </div>
      </div>
    </div>
  );
};

export default Collection;