import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #1b1b1b;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  overflow-x: hidden;
}

button {
  cursor: pointer;
  font-weight: 400;
  font-size:1.1rem;
  padding: 1rem 2rem;
  border:3px solid #881111;
  background: transparent;
  color: white;
  transition: all .5s ease;
  font-family: 'Josefin Sans', sans-serif;
  &:hover{
    background-color: #881111;
    color: white;
  }
}

h2{
  font-weight: lighter;
  font-size: 4rem;
  }

h3{
  color: white;
}

h4{
  font-weight: bold;
  font-size: 2rem;
}

span{
  font-weight:bold;
  color:#881111;
  font-family: 'Playfair Display', serif;
}

a{
  font-size:1.1rem;
}

p{
  padding: 3rem 0rem;
  color:#ccc;
  font-size: 1.4rem;
  line-height:150%;
}`

export default GlobalStyle;