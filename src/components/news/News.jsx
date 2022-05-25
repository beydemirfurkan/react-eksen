import React from 'react'
import {Row, Col , Nav, Container } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import NewsItem from '../news/NewsItem'
import NewsContent from '../news/NewsContent'

const News = () => {
  return (
    <section className='news'>
        <Container fluid>
        <Tab.Container id='left-tabs-example' defaultActiveKey='firstTab'>
            <Row className='justify-content-between py-5 align-items-center'>
                <Col xl={4} className='paragraph-margin'>
                    <Nav variant='pills' className='flex-column'>
                        <Nav.Item>
                            <Nav.Link eventKey='firstTab'>
                                <NewsItem
                                    dateNumber='07'
                                    dateMonth='subat'
                                    text='Transit Ambargo: Paris ve Frankfurt taki mevcut taşıma durumu'
                                    country='belcika'
                                    tag1='Haber'
                                    tag2='Avrupa Taşımacılığı'
                                />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='secondTab'>
                                <NewsItem
                                    dateNumber='07'
                                    dateMonth='subat'
                                    text='Transit Ambargo: Paris ve Frankfurt taki mevcut taşıma durumu'
                                    country='belcika'
                                    tag1='Haber'
                                    tag2='Avrupa Taşımacılığı'
                                />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='thirdTab'>
                                <NewsItem
                                    dateNumber='07'
                                    dateMonth='subat'
                                    text='Transit Ambargo: Paris ve Frankfurt taki mevcut taşıma durumu'
                                    country='belcika'
                                    tag1='Haber'
                                    tag2='Avrupa Taşımacılığı'
                                />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="my-3">
                        <a href="#!" className="btn btn-main2 w-75">daha fazlasını gör</a>
                    </div>
                </Col>
                
                <Col xl={7}>
                    <Tab.Content>
                        <Tab.Pane eventKey='firstTab'>
                            <NewsContent/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </Container>

    </section>
  )
}

export default News