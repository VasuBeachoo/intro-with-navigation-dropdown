import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Button from "./components/Button";
import MobileNav from "./components/MobileNav";
import clientDatabiz from "./assets/client-databiz.svg";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientMeet from "./assets/client-meet.svg";
import clientMaker from "./assets/client-maker.svg";
import imgHeroDesktop from "./assets/image-hero-desktop.png";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 7.5rem;
  padding: 1rem 8rem 3rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 5rem;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    padding-top: 0;
  }
`;

const Heading = styled.h1`
  color: var(--Almost-Black);
  font-size: clamp(2.5rem, 8vw, 4.25rem);
  max-width: 28rem;
  margin: 0;
`;

const Paragraph = styled.p`
  color: var(--Medium-Gray);
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  letter-spacing: 0.025rem;
  line-height: 1.85rem;
  max-width: 45ch;
  margin: 2.25rem 0;
`;

const Clients = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5.25rem;

  @media (max-width: 1000px) {
    margin-top: 4rem;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Client = styled.img``;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Img = styled.img`
  width: clamp(10rem, 75vw, 25rem);
`;

const DarkOverlay = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--Black);
  opacity: 0.5;
  z-index: 2;
`;

function renderClients(clients) {
  let key = 0;
  return clients.map((client) => (
    <Client key={key++} src={client.src} alt={client.alt} />
  ));
}

const App = () => {
  const clients = [
    { src: clientDatabiz, alt: "client-databiz" },
    { src: clientAudiophile, alt: "client-audiophile" },
    { src: clientMeet, alt: "client-meet" },
    { src: clientMaker, alt: "client-maker" },
  ];

  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 1000) {
      setMobile(true);
    } else {
      setMenu(false);
      setMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <AppContainer>
      <GlobalStyle />
      <Header mobile={mobile} menu={menu} setMenu={setMenu} />
      <Container>
        <TextContainer>
          <Heading>Make remote work</Heading>
          <Paragraph>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Paragraph>
          <Button>Learn More</Button>
          <Clients>{renderClients(clients)}</Clients>
        </TextContainer>
        <ImgContainer>
          <Img src={imgHeroDesktop} alt="hero-image" />
        </ImgContainer>
      </Container>
      {menu && <MobileNav mobile={mobile} />}
      {menu && <DarkOverlay />}
    </AppContainer>
  );
};

export default App;
