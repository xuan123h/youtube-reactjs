import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconSearch from "../icons/IconSearch";
import IconUser from "../icons/IconUser";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  position: relative;
  justify-content: flex-end;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`;
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <IconSearch></IconSearch>
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            {" "}
            <IconUser></IconUser> Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
