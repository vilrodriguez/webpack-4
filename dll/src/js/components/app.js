import React, { useState } from 'react';
import Loader from './loader';
// en webpack 4 los archivos de json no se necesitan loaders extras
import data from './data.json';
import logo from '../../images/platzi.png';
import video1 from '../../video/que-es-core.mp4';
import video2 from '../../video/que-es-core.webm';
import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

console.log(data);
function App(){
  const [loaderList, setLoaderList] = useState([]);
  function handleClick(){
    setLoaderList(data.loaders);
  }
  return (
    <div>
    <p className= "post-css" > App en React con PostCss</p>
    <p className= "less" > App en React con Less</p>
    <p className= "sass" > App en React con Sass</p>
    <p className= "stylus" > App en React con Stylus</p>
      <video src={video1} width={360} controls poster={logo}></video>
    <p>
      <img src={logo} alt="Logo de platzi" width={40}/>
    </p>
      <ul>
        {
          loaderList.map((item)=>(
          <Loader {...item} key={item.id}/>
        ))
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta ahorita</button>
    </div>
  )
}
export default App;