import React, { useState } from 'react';
import Loader from './loader';
// en webpack 4 los archivos de json no se necesitan loaders extras
import data from './data.json';

console.log(data);
function App(){
  const [loaderList, setLoaderList] = useState([]);
  function handleClick(){
    setLoaderList(data.loaders);
  }
  return (
    <div>
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