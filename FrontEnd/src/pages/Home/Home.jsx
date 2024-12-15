import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExplorerMenu from '../../components/ExplorerMenu/ExplorerMenu' // we are pasing category to the FoodDispaly and Explorer menu
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExplorerMenu category={category} setCategory={setCategory}/>  
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
