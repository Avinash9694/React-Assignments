import React, { useState } from 'react';
import './Postview.css';
import { Navbar, Container, Card, Row, Button, Col } from 'react-bootstrap';
import axios from 'axios';
// import Header from '../mock-data/header';


const Postview = () => {
  const [posts, setPost] = useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3004/user').then(res => {
      setPost(res.data);
    })

  }, []);
  return (
    <div className="site-container">
      {/* <Header></Header> */}
      <div >
        <div className='title'>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" className='logo'></img>
            <Navbar.Brand href='#' className='instaClone'>Instaclone</Navbar.Brand>
            
            <Navbar.Collapse >
              <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814055_1280.png" className='camera'></img>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        <div >
          {posts.map((post, idx) => {
            return (
              <Container className='mainBody' key={idx} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}></Col>
                  <Card.Header className='name' style={{ textAlign: "left"}}>
                    <label ><strong>{post.name}</strong></label>
                    <br></br>
                    {post.location}
                  </Card.Header>
                  <div>
                    <a href="#">...</a>
                  </div>
                  <Card.Body className='text-center'>
                    <Card.Title>
                      <img src={post.PostImage + idx} className='img'></img>
                    </Card.Title>
                    <img className='heart' src='https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814047_960_720.png'></img>
                    <img className='share' src="https://i.pinimg.com/originals/67/66/49/676649b3f9e491a18bfdb636ffb302d7.png"></img>
                    <div className='likes'>
                    <label>{post.likes} likes</label>
                    </div>
                    <div className='description'>
                    <Card.Text><strong>{post.description}</strong></Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Footer className='date'>
                    {post.date}
                  </Card.Footer>

                </Row>
              </Container>
            )
          })}
        </div>
      </div>



    </div>
  );
}

export default Postview;
