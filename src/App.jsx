import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { NewArrivals } from './pages/NewArrivals';
import { TrackOrder } from './pages/TrackOrder';
import { RequestAFind } from './pages/RequestAFind';
import { ProductView } from './pages/ProductView';
import { Cart } from './pages/Cart';
import { Profile } from './pages/Profile';
import { Concierge } from './pages/Concierge';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-on-background font-sans selection:bg-secondary selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/request-a-find" element={<RequestAFind />} />
          <Route path="/concierge" element={<Concierge />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

