import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { ProductDetail } from './pages/ProductDetail';
import { NewArrivals } from './pages/NewArrivals';
import { TrackOrder } from './pages/TrackOrder';
import { RequestAFind } from './pages/RequestAFind';
import { ProductView } from './pages/ProductView';
import { MobileNav } from './components/MobileNav';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-on-background font-body selection:bg-secondary selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/priority" element={<ProductDetail />} />
          <Route path="/arrivals" element={<NewArrivals />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/request-a-find" element={<RequestAFind />} />
          <Route path="/product/:id" element={<ProductView />} />
        </Routes>
        <Footer />
        <MobileNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
