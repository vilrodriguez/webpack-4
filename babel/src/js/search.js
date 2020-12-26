async function search (id) {
  // para usar async/aawit hay que installar un par de dependencias babel/plugin-transform-runtime y dependencia core de babel runtime install --save --save-exact
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return pokemon;
}

export default search;