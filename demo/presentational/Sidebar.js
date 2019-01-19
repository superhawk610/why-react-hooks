import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import routes from '../routes';
import styled from 'styled-components';
import github from './github.png';

function Sidebar({ location }) {
  return (
    <Container>
      <div>
        <Heading>
          <Embolden>React Hooks</Embolden> API DEMO
        </Heading>
        {routes.map(route => {
          const active = location.pathname === route.path;

          return (
            <Link key={route.path} active={active ? 1 : 0} to={route.path}>
              {route.name}
            </Link>
          );
        })}
      </div>
      <FooterLink href="https://github.com/superhawk610">
        <Logo src={github} />
        superhawk610
      </FooterLink>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Heading = styled.div`
  color: rebeccapurple;
  font-size: 16px;
  margin-bottom: 50px;
`;

const Embolden = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const Link = styled(RouterLink)`
  display: block;
  position: relative;
  padding: 10px;
  font-weight: 700;
  text-decoration: none;
  color: ${props => (props.active ? 'mediumslateblue' : 'rebeccapurple')};

  ${props =>
    props.active &&
    `
    &::after {
      content: '⬤';
      position: absolute;
      top: -10px;
      left: 0;
      color: #eee;
      font-size: 50px;
      z-index: -1;
    }
  `}
`;

const FooterLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: black;

  &:hover > img {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  display: inline;
  width: 20px;
  margin-right: 5px;
  transition: transform 500ms ease-out;
`;

export default withRouter(Sidebar);
