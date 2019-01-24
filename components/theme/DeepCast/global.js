import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    height: 100%; //This is a must for #root flex and sticky footer to work
    position: relative;
  }  
  html {
    // margin-top: 50px;
    scroll-behavior: smooth;
  }
  body {
    font-family: Arial;
    line-height: 0;
    @media screen and (max-width: 450px) {
      h1 {
        font-size: 2.2rem !important;
      }
    }
  }

  #root {
    height: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  
  main {
		flex-grow: 1;
	}

	header,
	main,
	footer {
		flex-shrink: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0; //bootstrap 4 bugfix
    padding-bottom: 1rem;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

  .team-members {
    @media (max-width: 500px) {
      img {
        width: 50% !important;
      }
      .member {
        padding: 0 !important;
        margin: 0 !important;
      }
      #card-content {
        padding: .5rem !important;
      }
    }
  }

  .partners-block {
    img {
      width: 150px !important;
    }
  }

  .home-subscription {
    @media (max-width: 767px) {
      padding-top: 7rem !important;
    }
  }
`;

export default GlobalStyle;
