import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}

:root{
  --primary: #0ad4fa;
  --secondary: #616161;
  --bgtext: #ededed;
  --category: #a3a3a3;
  --background: #f9f9f9;
  --hoverprods: rgba(10, 212, 250, .6);
}

body{
  background: var(---background);
}
`;
