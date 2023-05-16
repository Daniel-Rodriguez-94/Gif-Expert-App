import { useState } from "react"
import { AddCategory, GifGird } from "./Components"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ "Halo infinite" ])

  const onAddCategory = (NewCategory) => {

    if (categories.includes(NewCategory)) {  
    return
    }

    // categories.push(NewCategory)
    setCategories([NewCategory, ...categories])
    // setCategories(cat => [...cat, "Halo"])
  }

  return (
    <>


    <h1>GifExpertApp</h1>


    <AddCategory 
    onNewCategory={value => onAddCategory(value)}

    />




    {
      categories.map((category) => (
      <GifGird
      key={category}
      category={category} 
      />
    ))
  }
      {/* <li>ABC</li> */}



        
    </>
  )
}
