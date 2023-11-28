import landingVideo from "../../assets/landingVideo.mp4";
import { useNavigate } from "react-router";

export default function LandingVideo() {
  const navigate = useNavigate();
  return (
    <div className="home__landing-video-container">
      <div className="home__landing__overlay"></div>
      <video
        className="home__landing-video-container__video"
        src={landingVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="home__landing-video-container__container">
        <div className="home__landing-video-container__info">
          Welcome to Best AI Prompts! - Your Ultimate Source for AI-Powered
          Prompts! Whether you're a writer in search of unique story concepts, a
          student looking to delve into engaging research topics, a developer
          eager to train cutting-edge image generation models, or simply an
          enthusiast curious about the capabilities of artificial intelligence,
          our platform is designed for you.
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="home__landing-video-container__purchase-button"
        >
          Buy Prompts Package!
        </button>
      </div>
    </div>
  );
}
