import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay'
import About from '../../components/AboutUs/About'
import Feedbacks from '../../components/Feedbacks/Feedbacks'
import Contact from '../../components/Contact/Contact'
import Video from '../../components/Video/Video'

const Home = () => {

    const[category,setCategory] = useState("All");
    const[playState,setPlayState] = useState(false);

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <PlantDisplay category={category} />
      <About setPlayState={setPlayState}/>
      <Feedbacks/>
      <Contact/>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
    
    
  )
}

export default Home
