import React from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import {Tab} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import TabsTop from '../components/services/TabsTop'
import TabsInner from '../components/services/TabsInner'

import DepoHero from '../img/services/depo-hero.png';
import DepoBottom from '../img/services/depo-bottom.png';

const Services = () => {
  return (
      <>
        <Header/>
        <main className='services'>
            <div className="container py-5">
                <div className="row flex-column py-5">
                    <TabsTop
                    title='Hizmetler'
                    miniTitle='Depo Yönetimi'
                    img={`${DepoHero}`}
                    />

                    <div className="services-tab py-5">
                        <Nav variant="pills" className="d-flex justify-content-around pt-5">
                            <Nav.Item>
                                <Nav.Link eventKey="firstService">Gümrükleme</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="secondService">Kara Taşımacılığı</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="thirdService">Parsiyel&LFT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="forthService">Depo Yönetimi</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifthService">Ekspres&Minivan</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixthService">Proje Taşımacılığı</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="firstService">
                                <TabsInner
                                miniTitle='Test Title'
                                text='lorem12312o3'
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                </div>
            </div>
        </main>
      </>
  )
}

export default Services