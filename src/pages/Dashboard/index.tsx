import {Container, Row, Col } from 'reactstrap'
import { Banner } from '../../components/Banner'
import { Post } from '../../components/Post'

export function Dashboard(){
  return(
    <>
      <Banner/>
      <Container>
        <Row>
          <Col lg="3">
            
          </Col>
          <Col lg="9">
            <Post/>
          </Col>
        </Row>
      </Container>
    </>
  )
}