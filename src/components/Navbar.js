import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg'

const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background:;
`;
const NavLink=css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
justify-content:space-between;
cursor:pointer;
text-decoration:none;
`;
const Logo = styled(Link)`
${NavLink};
font-style:italic;
`;
const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media screen and (max-width: 768px){
  display:none;
}
`;
const MenuBars = styled.i`
display:none;
@media screen and (max-width: 768px){
  display:block;
  background-image: url(${Bars});
  background-size: contain;
  height: 40px;
  width:40px;
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  transform: translate(-50%, 25%);
}
`;
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-40px;
@media screen and (max-width: 760px){
  display:none;
}
`;
const NavMenuLink=styled(Link)`
${NavLink};

`;
function Navbar({toggle}) {
    return (
      <Nav>
          <Logo to='/'>ELIXR</Logo>
          <MenuBars onClick={toggle}/>
          <NavMenu>
             {MenuData.map((item, index)=>(
               <NavMenuLink to={item.Link} key={index}>
                 {item.title}
               </NavMenuLink>
             ))}
          </NavMenu>
          <NavBtn>
            <Button to='/contact' primary='true'>Contact Us</Button>
          </NavBtn>
      </Nav>
    )
}

export default Navbar
