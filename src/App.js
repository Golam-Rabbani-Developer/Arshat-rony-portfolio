import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Contact/Contact';
import About from './Pages/About/About';
import ArticleDetail from './Pages/ArticleDetail/ArticleDetail';
import Articles from './Pages/Articles/Articles';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Loading from './Pages/Shared/Loading';

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 6000);
  return (
    <div style={{ backgroundColor: "#282C34" }} className='body'>
      {
        loading ? <div style={{ minHeight: "100vh" }} className=' d-flex justify-content-center align-items-center'>
          <Loading type="bars" color="red"></Loading>
        </div>

          :
          <>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/project' element={<Articles></Articles>}></Route>
              <Route path='/project/:id' element={<ArticleDetail></ArticleDetail>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
