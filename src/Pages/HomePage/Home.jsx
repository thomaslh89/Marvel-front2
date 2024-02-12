import "./Home.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
const Home = () => {
  return (
    <div className="twitter">
      <h1> Les derniers nouveautés !</h1>{" "}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Marvel"
        options={{ height: 200 }}
      />
    </div>
  );
};

export default Home;
