import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
}

body{
  background: #312E38;
  color: #FFF;

  font-size: 16px;
}

h1,h2,h3,h4,h5,h6,strong{
  font-weight: 500;
}

button{
  cursor: pointer;
}

`;
