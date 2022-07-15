import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconExplore from "../icons/IconExplore";
import IconGaming from "../icons/IconGaming";
import IconHelp from "../icons/IconHelp";
import IconHistory from "../icons/IconHistory";
import IconHome from "../icons/IconHome";
import IconLibrary from "../icons/IconLibrary";
import IconLightDark from "../icons/IconLightDark";
import IconLive from "../icons/IconLive";
import IconMovies from "../icons/IconMovies";
import IconMusic from "../icons/IconMusic";
import IconNews from "../icons/IconNews";
import IconReport from "../icons/IconReport";
import IconSettings from "../icons/IconSettings";
import IconSports from "../icons/IconSports";
import IconSubscrise from "../icons/IconSubscrise";
import IconUser from "../icons/IconUser";
import LamaTube from "../img/logo.png";

const Container = styled.div`
  flex: 1;
  /* background-color: #202020; */
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  /* color: white; */
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7px 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 1px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
            LamaTube
          </Logo>
        </Link>
        <Item>
          {/* Icon home */}
          <IconHome></IconHome>
          Home
        </Item>
        <Item>
          {/* Icon */}
          <IconExplore></IconExplore>
          Explore
        </Item>
        <Item>
          {/* Icon */}
          <IconSubscrise></IconSubscrise>
          Subscriptions
        </Item>
        <Hr />
        <Item>
          {/* Icon */}
          <IconLibrary></IconLibrary>
          Library
        </Item>
        <Item>
          {/* Icon */}
          <IconHistory></IconHistory>
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              {" "}
              <IconUser></IconUser> Sign In
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          {/* Icon */}
          <IconMusic></IconMusic>
          Music
        </Item>
        <Item>
          {/* Icon */}
          <IconSports></IconSports>
          Sports
        </Item>
        <Item>
          {/* Icon */}
          <IconGaming></IconGaming>
          Gaming
        </Item>
        <Item>
          {/* Icon */}
          <IconMovies></IconMovies>
          Movies
        </Item>
        <Item>
          {/* Icon */}
          <IconNews></IconNews>
          News
        </Item>
        <Item>
          {/* Icon */}
          <IconLive></IconLive>
          Live
        </Item>
        <Hr />
        <Item>
          {/* Icon */}
          <IconSettings></IconSettings>
          Settings
        </Item>
        <Item>
          {/* Icon */}
          <IconReport></IconReport>
          Report
        </Item>
        <Item>
          {/* Icon */}
          <IconHelp></IconHelp>
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {/* Icon */}
          <IconLightDark></IconLightDark>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
