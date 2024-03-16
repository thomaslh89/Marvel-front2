import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CharactersDetails.css";
import CharacterComics from "./CharacterComics";

const CharactersDetail = () => {
  const { characterID } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://site--marvel-back--f5rrxgmqcwc8.code.run/characterdetail/${characterID}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [characterID]);
  return (
    <div className="maindetailscharac">
      {isLoading ? (
        <span>en cours de chargement...</span>
      ) : (
        <div className="descriptioncharac">
          <h1>{data.name}</h1>
          <img
            src={`${data.thumbnail.path}/portrait_medium.${data.thumbnail.extension}`}
            alt={data.name}
          />
          <p>{data.description}</p>
          <p>Les Comics dans lequel j'ai joué</p>
          <div>
            <CharacterComics characterID={characterID} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharactersDetail;
