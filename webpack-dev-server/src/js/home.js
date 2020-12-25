import '../css/index.css';
import  text  from './text';
alert('aaaa');

if (module.hot) {
  module.hot.accept('./text.js', function(){
    text();
  })
}


