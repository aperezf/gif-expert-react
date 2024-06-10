import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokemon'])

  const handleAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories(prevCategories => [category, ...prevCategories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={handleAddCategory} />
      <button onClick={handleAddCategory}>Agregar</button>
      {categories.map((c) => (<GifGrid key={c} category={c} />))}
    </>
  )
}
