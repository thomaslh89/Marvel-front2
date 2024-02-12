import "./Home.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Home = () => {
  return (
    <div className="wrapper-home">
      <div className="twitter">
        <h1> Les dernières nouveautés !</h1>{" "}
      </div>
      <div className="youtube">
        <LiteYouTubeEmbed
          id="9sLbGuQFVAo"
          title="DEADPOOL & WOLVERINE Bande Annonce (2024) Deadpool 3"
        />
      </div>
    </div>
  );
};

export default Home;
