import { BlogProps } from '@/@types';
import Image from 'next/image'
import React from 'react'

const FilterBlog = ({ text, src, isActive, onChangeBlog, mainValue, setTempValue }: any) => {
  
  
  const handleClick = () => {
    onChangeBlog(text);
    // Filter meals based on the selected meal type
    let filteredBlogs;
    if (text === 'All') {
      filteredBlogs = mainValue;
    } else {
      if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') console.log(text);
      
      filteredBlogs = mainValue.filter((blog:BlogProps) => blog.category === text?.toLowerCase());
    }
if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') console.log(filteredBlogs);

    // Update the recommended meals with the filtered list
    setTempValue(filteredBlogs);
  };
  return (
    <div className='flex gap-3 items-center cursor-pointer'>
      {src && <Image alt='meal' width={27.6} height={27.6} src={src} className='md:block hidden' />}
      <div className={`rounded-[40px] md:px-[18px] px-3 md:py-[5px] py-1 md:text-desktop-content text-mobile-caption ${isActive ? 'bg-primarygtext text-base-white' : 'md:border-[1.5px] border-[1.09px] border-primarygtext text-primarygtext'}`} onClick={handleClick}>
        {text}
      </div>
    </div>
  )
}

export default FilterBlog