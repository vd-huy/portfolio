import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constant";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1200px;
`;

const NavLogo = styled(Link)`
  width: 80%;
  padding: 0px 6px;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.a`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0px 6px;
  text-decoration: none;
  @media screen and (max-width: 640px) {
    justify-content: start;
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Span = styled.span`
  padding: 0px 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translate(0)" : "translate(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <LogoLink>
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </LogoLink>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>

        <ButtonContainer href={Bio.github} target="_blank">
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>

      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#experience"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#education"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Education
          </MobileMenuLinks>
          <ButtonContainer href={Bio.github} target="_blank" mobile={true}>
            <GithubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
            >
              Github Profile
            </GithubButton>
          </ButtonContainer>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
