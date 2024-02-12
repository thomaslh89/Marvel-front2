import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ComicsCard from "./ComicsCard";
import { PaginationControl } from "react-bootstrap-pagination-control";

import "../ComicPages/Comics.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skipValue, setSkipValue] = useState(1);
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://site--marvel-back--f5rrxgmqcwc8.code.run/comics?title=${title}&skip=${skipValue}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, skipValue]);

  const handleSearch = () => {
    setSearchQuery(title);
  };
  const handleReset = () => {
    setSearchQuery("");
    setTitle("");
  };

  return (
    <div className="main">
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <>
          <div className="searchGroup">
            <div className="searchbar">
              <button onClick={handleSearch}>Rechercher</button>
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                type="text"
                placeholder="Tapez votre rechercher ici"
                name="searchBar"
                id="searchBar"
                onChange={(event) => setTitle(event.target.value)}
              />

              <button onClick={handleReset}>Tous les comics </button>
            </div>
          </div>

          <div className="card-wrapper red">
            {data.results && data.results.length > 0 ? (
              data.results.map((val, index) => {
                return <ComicsCard key={index} data={val} />;
              })
            ) : (
              <div className="noresults">Aucun personnage trouvé.</div>
            )}
          </div>
          <div>
            <PaginationControl
              page={skipValue}
              total={data.count}
              limit={100}
              changePage={(page) => {
                setSkipValue(page);
                console.log(page);
              }}
              ellipsis={1}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Comics;
