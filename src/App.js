import styled from "styled-components";
import Header from "./components/Header";
import Button from "./components/Button";
import clientDatabiz from "./assets/client-databiz.svg";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientMeet from "./assets/client-meet.svg";
import clientMaker from "./assets/client-maker.svg";
import imgHeroDesktop from "./assets/image-hero-desktop.png";
import imgHeroMobile from "./assets/image-hero-mobile.png";

const AppContainer = styled.div``;

const Container = styled.div``;

const TextContainer = styled.div``;

const Heading = styled.h1``;

const Paragraph = styled.p``;

const Clients = styled.div``;

const Client = styled.img``;

const ImgContainer = styled.div``;

const Img = styled.img``;

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

  return (
    <AppContainer>
      <Header />
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
    </AppContainer>
  );
};

export default App;
