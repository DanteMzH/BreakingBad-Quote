import React from 'react'
import { Lista } from './Lista';
import { Jesi } from './Jesi';


export const Det = () => {


  const handle = async() =>{
    
    const tio = await Jesi();
  }
    
    
    
    return (
      <button onClick={handle}>
        cLcK
      </button>
      )
      
    }
