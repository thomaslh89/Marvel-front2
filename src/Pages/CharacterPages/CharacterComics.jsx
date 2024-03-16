import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterComics.css";
import { useNavigate } from "react-router-dom";

const CharacterComics = ({ characterID }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-back--f5rrxgmqcwc8.code.run/comics/${characterID}`
        );
        setComics(response.data.comics);
      } catch (error) {
        console.error("Erreur lors de la récupération des comics", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComics();
  }, [characterID]);

  if (isLoading) return <div>Chargement des comics...</div>;

  return (
    <div className="mainCharacteresComics">
      {comics.length > 0 ? (
        <ul className="ListComics">
          {comics.map((comic, index) => (
            <li className="li-comics" key={index}>
              {comic.title}
              <img
                onClick={() => navigate(`/comicsdetail/${comic._id}`)}
                src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun comic trouvé pour ce personnage.</p>
      )}
    </div>
  );
};

export default CharacterComics;
