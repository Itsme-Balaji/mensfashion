import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shirt from './Pages/Shirt';
import SelectProduct from './Pages/SelectProduct';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Watch from './Pages/Watch';
import Pant from './Pages/Pant';
import Shoe from './Pages/Shoe';
import TShirt from './Pages/TShirts';
import Perfume from './Pages/Perfume';
import ScrollToTop from './Components/ScrollTo/ScrollToTop';
import Spinner from './Components/Spinner/Spinner'; // Make sure this shows a full-screen loader
import Accessories from './Pages/Accessories';
import Footer from './Components/Footer/Footer';

  import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.images;
    let loadedCount = 0;
    const totalImages = images.length;

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setTimeout(() => setLoading(false), 500); // small delay for smoother UX
      }
    };

    for (let i = 0; i < totalImages; i++) {
      if (images[i].complete) {
        checkAllImagesLoaded();
      } else {
        images[i].addEventListener('load', checkAllImagesLoaded);
        images[i].addEventListener('error', checkAllImagesLoaded); // handle errors
      }
    }

    if (totalImages === 0) {
      setLoading(false);
    }
  }, []);

  if (loading) return <Spinner />; // Fullscreen spinner component


// ..
AOS.init();

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shirt' element={<Shirt />} />
        <Route path='/selectProduct'>
          <Route path=':productId' element={<SelectProduct />} />
        </Route>
        <Route path='/watch' element={<Watch />} />
        <Route path='/pant' element={<Pant />} />
        <Route path='/shoe' element={<Shoe />} />
        <Route path='/tshirt' element={<TShirt />} />
        <Route path='/perfume' element={<Perfume />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
