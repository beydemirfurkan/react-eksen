import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../components/Hero'
import Number from '../components/Number'
import Cost from '../components/Cost'
import Country from '../components/Country'
import Solutions from '../components/Solutions'
import Team from '../components/Team'

const Index = () => {
  return (
    <main>
        <Header/>
        <Hero/>
        <Number/>
        <Solutions/>
        <Cost/>
        <Team/>
        <Country/>
        <Footer/>
    </main>
  )
}

export default Index