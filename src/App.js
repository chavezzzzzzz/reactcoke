import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

  const ul1 = {
    display: 'flex',
    listStyle: 'none',
    backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
  }
  const logoimg = {
    height: '3.1em',
    width: '3.1em',
    marginLeft: '2.63em',
    marginTop: '1.25em',
  }
  const navbara = {
    textDecoration: 'none',
    color: 'red',
  }
  const wow = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue',
  }
  return (
    <div id="App" className="App" style={ul1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul style={ul1} id="ul1" className="ul1">
        <li id="logo" className="navbar"><img style={logoimg} id="logoimg" src={process.env.PUBLIC_URL + '/coke2.svg'} alt="Coke logo" /></li>
        <li id="products" className="navbar"><a style={navbara} id="productsa" className="navbara" href="">OUR PRODUCTS</a></li>
        <li id="shop" className="navbar"><a style={navbara} id="shopa" className="navbara" href="">SHOP</a></li>
        <li id="give" className="navbar"><a style={navbara} id="givea" className="navbara" href="">GIVE</a></li>
        <li id="rewards" className="navbar"><a style={navbara} id="rewardsa" className="navbara" href="">REWARDS</a></li>
        <li id="where" className="navbar"><a style={navbara} id="wherea" className="navbara" href="">WHERE TO BUY</a></li>
        <li id="studio" className="navbar"><a style={navbara} id="studioa" className="navbara" href="">COKE STUDIO</a></li>
      </ul>
      <div style={wow}>
        <a href="">Hello</a>
        <a style={{ marginTop: '20px' }}>____</a>
      </div>


    </div>
  );
}

export default App;