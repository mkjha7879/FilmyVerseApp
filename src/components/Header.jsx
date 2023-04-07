import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className=' flex justify-between   text-3xl text-red-500 font-bold p-4 border-b-2 border-gray-700 bg-gray-800 sticky top-0'>
  <Link to={'/'}><span>Filmy<span className='text-white'>Verse</span> </span></Link>   
   <Link to={'/addMovie'}><Button className='text-lg flex items-center cursor-pointer'><AddIcon className='mr-1'/> <span className='text-white'>Add New</span>  </Button> </Link> 
    
    
    </div>
  )
}

export default Header