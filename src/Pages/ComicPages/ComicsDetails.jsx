import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ComicsDetails.css";

const ComicsDetails = () => {
  const { comicID } = useParams();
  const navigate = useNavigate(); // Utilise useNavigate au lieu de useHistory
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (comicID) {
          const response = await axios.get(
            `https://site--marvel-back--f5rrxgmqcwc8.code.run/comicsdetail/${comicID}`
          );
          setData(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [comicID]);

  return (
    <div className="maincomicsDescription">
      {isLoading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div className="descriptioncomics">
          <h1>{data.title}</h1>{" "}
          <img
            src={`${data.thumbnail.path}/portrait_large.${data.thumbnail.extension}`}
            alt={data.name}
          />
          <p>{data.description}</p>
          <button className="goback" onClick={() => navigate(-1)}>
            Retour{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default ComicsDetails;
