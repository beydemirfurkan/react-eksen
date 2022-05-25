import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../components/Hero'
import Number from '../components/Number'
import Cost from '../components/Cost'
import Country from '../components/Country'
import Solutions from '../components/Solutions'
import Team from '../components/Team'
import HomeSlide1 from '../components/HomeSlide1'
import Safely from '../components/Safely'
import News from '../components/news/News'
const Index = () => {
  return (
    <main>
        <Header/>
        <Hero/>
        <Number/>
        <Solutions/>
        <Cost/>
        <HomeSlide1/>
        <Safely/>
        <Team/>
        <News/>
        <Country/>
        <Footer/>
    </main>
  )
}

export default Index