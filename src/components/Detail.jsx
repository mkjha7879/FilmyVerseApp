import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router";
import { db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Bars } from "react-loader-spinner";
import Reviwes from "./Reviwes";
const Detail = () => {
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating:0
  });
  const[loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      setLoading(true)
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false)
    }
    getData();
  }, []);
  return (
    <div className="p-4 flex flex-col md:flex-row md:items-center justify-center w-full">
     {loading? <div className=" h-screen flex justify-center items-center"><Bars height={30} color="white"/></div>:<>
       <img
        className="h-[500px] block  md:sticky top-24"
        src={data.image}
        alt=""
      />
      <div className=" ml-0 md:ml-4 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          {data.title} <span className="text-xl">({data.year})</span>
        </h1>
        <ReactStars size={25} half={true} value={5} edit={false} />
        <p className="mt-2">{data.description}</p>
        <Reviwes id={id} />
      </div>
      </>
    }
   
    </div>
  );
};

export default Detail;
