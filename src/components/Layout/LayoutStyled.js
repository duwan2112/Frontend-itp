import styled from "@emotion/styled";

const ContainerNavStyled = styled.div`
  display: flex;
  position: ${(props) => (props.scroll ? "fixed" : "absolute")};
  align-items: center;
  z-index: 6;
  padding: 27px 0;
  padding-left: 117px;
  transition: 0.5s all;
  width: 100%;
  background: ${(props) => (props.scroll ? "#f1f1f1" : "transparent")};

  .container-logo {
    margin-right: 30px;
  }

  nav a {
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) =>
      props.scroll ? "rgba(0,0,0,.5)" : "rgba(255, 255, 255, 0.5)"};
    padding: 0 18px;
    font-size: 1.4rem;
    margin: 0;
    align-items: flex-end;
    text-align: start;
  }

  .active {
    transform: scale(1.1);
    color: ${(props) =>
      props.scroll ? "rgba(0,0,0,1)" : "rgba(255, 255, 255, 1)"};
  }

  .container-seccion {
    margin-right: 30px;

    .button {
      text-transform: uppercase;
      text-decoration: none;
      font-size: 1.5rem;
      color: black;
      margin-right: 3rem;
      padding: 1rem 2rem;
      border-radius: 0.1rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      transition: 0.5s all;
      &:hover {
        box-shadow: 0px 0px 5px #000;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: 1px solid transparent;
      }
    }
    .btn-white {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      border: 1px solid transparent;
    }
  }

  @media (max-width: 1140px) and (min-width: 990px) {
    padding-left: ${(props) => props.scroll && "40px"};
    button {
      margin-right: ${(props) => props.scroll && "1rem"};
    }
    nav a {
      padding: ${(props) => props.scroll && "0 10px"};
    }
  }

  @media (max-width: 990px) {
    position: ${(props) => (props.open ? "fixed" : "absolute")};
    z-index: 10;
    flex-direction: column;
    height: 100vh;
    width: 30%;
    padding: 0;
    margin: 0;
    background: white;
    margin-left: ${(props) => (props.open ? "0" : "-30%")};
    transition: 0.2s all;

    .background-menu {
      margin-left: ${(props) => (props.open ? "0" : "-130%")};
      position: fixed;
      z-index: -5;
      background: rgba(255, 255, 255, 0.94);
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      .close {
        width: 70%;
        height: 100%;
        &:focus {
          outline: none;
        }
      }
    }

    .nav {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      justify-content: start;
      margin-left: 1rem;
    }
    nav a {
      padding: 0;
      padding: 2rem;
      color: black;
    }
    .container {
      &-logo-mobile {
        opacity: ${(props) => (props.open ? "0" : "1")};
        display: none;
        position: fixed;
        top: 4rem;
        left: 4rem;
        z-index: 1000;
        transition: 1s all;
        button {
          color: ${(props) => (props.scroll ? "black" : "white")};
          &:focus {
            outline: none;
          }
        }
      }
      &-open {
        transition: 0.1s all;
      }

      &-seccion {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        width: 100%;
        bottom: 0;
        margin-bottom: 3rem;

        .button {
          margin: 0;
        }
      }
    }

    .active {
      color: black;
    }
  }

  @media (max-width: 760px) {
    width: 50%;
    margin-left: ${(props) => (props.open ? "0" : "-50%")};
    .background-menu {
      margin-left: ${(props) => (props.open ? "0" : "-150%")};
    }
    .container-logo-mobile {
      top: 1rem;
      left: 1rem;
    }
    .container-seccion {
      .button {
        margin-bottom: 2rem;
      }
      .button-white {
        border: none;
      }
    }
  }
`;

const FooterStyled = styled.div`
  min-height: 30vh;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  p {
    font-size: 5rem;
  }
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;

export {ContainerNavStyled, FooterStyled};
