import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('¿Quién es ese pokemon?');
search(id).then((data)=>{
 render(data);
}).catch(()=>{
  alert('no hay animalito raro');
})
// import  text  from './text';
// alert('aaaa');

// if (module.hot) {
//   module.hot.accept('./text.js', function(){
//     text();
//   })
// }


