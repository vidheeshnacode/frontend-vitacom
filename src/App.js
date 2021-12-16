import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Card, CardTitle, Container, Col, Row } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import AllBlog from './components/AllBlog'
import AddBlog from './components/AddBlog'
import UpdateBlog from './components/UpdateBlog'
import FileUpload from './components/FileUpload'

function App() {
  return (
    <div className="App">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <ToastContainer position="top-center"/>
      <CardTitle className="display-2">
        One Blog
      </CardTitle>
      <Router>
          <Container>
            <Row>
              <Col>
                  <Menu/>
              </Col>
            </Row>
            <Row>
              <Col>
              <Routes>
                  <Route path="/" element={<AllBlog/>}></Route>
                  <Route path="/add" element={<AddBlog/>}></Route>
                  <Route path="/update" element={<UpdateBlog/>}></Route>
                  <Route path="/upload" element={<FileUpload/>}></Route>
                </Routes>
              </Col>
            </Row>
          </Container>
      </Router>
      </Card>
      
    </div>
  );
}

export default App;
