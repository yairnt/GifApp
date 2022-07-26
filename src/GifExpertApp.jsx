import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Valorant']);

const onAddCategory = (newCategory) => {

  if (categories.includes(newCategory)) return ;

    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory 
        onNewCategory={ (event) => onAddCategory(event)}
      />

      { categories.map (category => (
          <GifGrid key={category} category={category}/>
        ))
      }

    </>
  )
}
// nrHvnUxtQLAcnJNdSZ4BFVx1j8sR5x3c