import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { TailSpin } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "./firebase/firebase";
import { Link } from "react-router-dom";
const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((predata) => [...predata, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className=" flex flex-wrap justify-between p-3 mt-2  font-medium">
      {loading ? (
        <div className="items-center w-full flex justify-center h-96">
          <TailSpin height={50} color="white" />
        </div>
      ) : (
        data.map((item) => {
          return (
            <Link to={`/detail/${item.id}`}>
            <div className="cards shadow-lg p-2 hover:scale-105 duration-500 cursor-pointer my-3">
              <img src={item.image} alt="" className="h-52 md:h-72 " />
              <h1>
                <span className="text-gray-500">Name:</span> {item.title}
              </h1>
              <h1 className="flex items-center">
                <span className="text-gray-500 mr-1">Rating:</span>
                <ReactStars size={25} half={true} value={5} edit={false} />
              </h1>
              <h1>
                <span className="text-gray-500">Year:</span> {item.year}
              </h1>
            </div>
            </Link>
          );
        })
      )}
    </div>
   
  );
};

export default Cards;
