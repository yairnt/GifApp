import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

const onAddCategory = (newCategory) => {
    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory /*setCategories={setCategories}*/
        onNewCategory={ (event) => onAddCategory(event)} />
      <ol>
        { categories.map (category => {
          return <li key={ category }>{category}</li>
        }) }
      </ol>
    </>
  )
}
// nrHvnUxtQLAcnJNdSZ4BFVx1j8sR5x3c