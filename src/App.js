import Header from './Header';
import Home from './Home';
import CheckOut from "./CheckOut";

import {BrowserRouter as Router,Route,Rotues, Routes} from 'react-router-dom'
function App() {
  const header = (<Header />)
  return (
    <div className='App'>
      <Router >
        <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<CheckOut />}/>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
