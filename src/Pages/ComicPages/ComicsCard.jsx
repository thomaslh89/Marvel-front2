import { useNavigate } from "react-router-dom";
import "./ComicsCard.css";
const ComicsCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comicsdetail/${data._id}`);
  };

  return (
    <div
      className="box3 box4"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="evenboxinner2">
        <h3>{data.title}</h3>
      </div>

      <img
        src={`${data.thumbnail.path}/portrait_large.${data.thumbnail.extension}`}
        alt={data.title}
      />
    </div>
  );
};

export default ComicsCard;
