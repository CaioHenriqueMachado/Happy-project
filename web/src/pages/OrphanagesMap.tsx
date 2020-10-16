import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy"/>

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Carapicuiba</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-23.5314159,-46.8349725]}
        zoom={15}
        style={{ width:'100%', height:'100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus  size="32" color="#FFF" />
      </Link>
    </div>
  );

}

export default OrphanagesMap;