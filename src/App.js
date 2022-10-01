import Card from './Components/Card';
import {Container} from 'react-bootstrap'
import Cart from './Components/Cart';
import {CartProvider} from 'react-use-cart';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPannel from './Components/AdminPannel';

function App() {
  return (
    <div className="App">
            <Router>
      <CartProvider>
        <Container>
            <Routes>
              <Route path ="/" element={<Card/>} exact/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/Admin" element={<AdminPannel/>}/>
            </Routes>
        </Container>
        </CartProvider>
            </Router>
        </div>

  );
}
export default App;


 
 

 