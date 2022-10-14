import React from 'react';
import "./Home.css"
import Profuct from './Profuct';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_comtainer">
            <img src="https://wallpaperaccess.com/full/2593168.png" className="home_image" />
            <div className="home_row">
                <Profuct
                id="123"
                title="Boat Watch"
                price="1900"
                rating={3}
                image="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" />
            </div>
            <div className="home_row">
            <Profuct id="156"
                title="Boat Watch"
                price="1900"
                rating={4}
                image="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" />

            </div>
            <div className="home_row">
            <Profuct id="1353"
                title="Boat Watch"
                price="1900"
                rating={1}
                image="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg"  />

            </div><div className="home_row">
            <Profuct  id="1345"
                title="Boat Watch"
                price="1900"
                rating={4}
                image="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" />

            </div><div className="home_row">
            <Profuct id="345"
                title="Boat Watch"
                price="1900"
                rating={3}
                image="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" />

            </div><div className="home_row">
            <Profuct id="123"
                title="Boat Watch"
                price="1900"
                rating={2}
                image="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
