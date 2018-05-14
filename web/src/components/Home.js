import React, { Component } from 'react';
import '../css/Home.css';
import Header from './Header';
import carte from '../img/carte.png';
import { Parallax } from 'react-parallax';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header/>
        <div className="">
          <Parallax bgImage={require('../img/cc2.jpeg')}
            strength={400}>
            <div style={{height: 400}}>
              <div className="paralDiv">Reprenez le contrôle en vous fournissant chez le producteur. Trouvez des produits de qualité, en aidant le marché local</div>
            </div>
          </Parallax>
          <div className="divider"></div>
          <Parallax bgImage={require('../img/cc1.jpg')}
            strength={400}>
            <div style={{height: 400}}>
              <div className="paralDiv">Ou proposez à la vente ce que vous produisez. Devenez vous-même un producteur!</div>
            </div>
          </Parallax>
          <div className="divider"></div>
          <div className="wrapper center">
            <img src={carte} alt="Carte" className="map" />
          </div>
        </div>
        <div>Footer</div>

      </div>
    );
  }
}

export default Home;
