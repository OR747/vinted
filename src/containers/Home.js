import React, { useState, useEffect } from "react";
import OrderByPrice from "../components/OrderByPrice/OrderByPrice";
import Offers from "../components/Home/Offers";
import photo from "../images/Vinted2.png";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Home = ({ filter }) => {
  const [data, setData] = useState([]);

  // State qui permet de trier par prix
  const [sort, setSort] = useState("");

  // Nombre d'offres maximum par page
  const limit = 20;

  // State qui permet de donner le numéro de la page dynamiquement
  const [page, setPage] = useState(1);

  // State qui permet de calculer le nombre de page maximum
  const [pageMax, setPageMax] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const handlePageClick = (event) => {
    console.log(event);
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${sort}&page=${page}$limit=${limit}`
        );
        //console.log(response.data);
        setData(response.data);
        setPageMax(Math.ceil(Number(response.data.count) / limit));

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    console.log("Rentre dans le useEffect");
    fetchData();
  }, [sort, page, filter]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="container1">
        <div className="image">
          <img src={photo} alt="" />
        </div>
        <div className="bloc2">
          <div className="bloc3">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
          </div>
          <div className="bloc4">
            <Link to="/publish">
              <button>Commencer à vendre</button>
            </Link>
          </div>
        </div>
        {/* <div>
          <img src={Tear} alt="" />
        </div> */}
      </div>

      <OrderByPrice setSort={setSort} />
      <div className="pages">
        <div className="pages">
          <ReactPaginate
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            // breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageMax}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <div className="bloc5">
        <Offers data={data} />
      </div>
    </div>
  );
};
export default Home;
