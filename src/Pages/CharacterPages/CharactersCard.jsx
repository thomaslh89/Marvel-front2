import { useNavigate } from "react-router-dom";
import "./CharactersCard.css";
const CharactersCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/characterdetail/${data._id}`);
  };

  return (
    <div
      className="box box2 "
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="evenboxinner">
        <h3>{data.name}</h3>
      </div>
      <img
        src={`${data.thumbnail.path}/portrait_large.${data.thumbnail.extension}`}
        alt={data.name}
      />
    </div>
  );
};

export default CharactersCard;
