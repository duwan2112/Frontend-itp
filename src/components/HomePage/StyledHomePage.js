import styled from "@emotion/styled";

const HomePageStyled = styled.div`
  width: 100%;
`;

const HomeFeaturesStyled = styled.div`
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  p {
    font-size: 5rem;
  }
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;

const HomePricingStyled = styled.div`
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  p {
    font-size: 5rem;
  }
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;
const HomeResourceStyled = styled.div`
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  p {
    font-size: 5rem;
  }
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;
const HomeContactStyled = styled.div`
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  p {
    font-size: 5rem;
  }
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;

const HomeHeaderStyled = styled.div`
  z-index: 1;
  min-height: 100vh;
  background: #24292e;
  box-shadow: 0px 3px 5px #24292e;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  .particles {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 98vw;
  }
  .container {
    &-all {
      z-index: 5;
      height: 100%;
      display: flex;

      justify-content: center;
    }
    &-text {
      width: 40%;

      h1 {
        font-size: 4rem;
        padding: 3rem 0;
      }
      p {
        font-size: 1.9rem;
        font-weight: 200;
        line-height: 3rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    &-img {
      width: 40%;
      text-align: center;
      padding-top: 3rem;
      img {
        width: 80%;
      }
    }
    &-button {
      margin-top: 5rem;
      .button {
        text-transform: uppercase;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        margin: 0 1rem;
        font-size: 1.5rem;
        padding: 1rem 5rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 2.5rem;
        transition: 0.7s all;
        &:hover {
          transform: scale(1.1);
          box-shadow: 0 0 2px 2px #fff;
          background: white;
          transition: 0.7s all;
          color: rgba(0, 0, 0, 0.7);
        }
      }
      .btn-white {
        color: rgba(0, 0, 0, 0.7);
        background: white;
      }
    }
  }

  @media (max-width: 1140px) {
    .container-all {
      justify-content: space-around;
    }
    .container-img {
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 960px) {
    .container-all {
      flex-direction: column;
      padding-top: 10rem;
      .container-text,
      .container-img {
        width: 80%;
        text-align: center;
        margin: 0 auto;
      }

      .container-img {
        margin: 7rem auto;
      }
    }
  }
`;

export {
  HomePageStyled,
  HomeHeaderStyled,
  HomeFeaturesStyled,
  HomePricingStyled,
  HomeResourceStyled,
  HomeContactStyled,
};
