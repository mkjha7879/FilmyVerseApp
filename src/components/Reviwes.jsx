import React, { useState } from "react";
import ReactStars from "react-stars";
import { reviewRef } from "./firebase/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

const Reviwes = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(0);
  const [form, setForm] = useState("");
  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewRef, {
        movieId: id,
        name: "Shubham Negi",
        thought: form,
        timeStamp: new Date().getTime(),
        rating: rate,
      });
      const ref= doc(db,"movies,id")
      await updateDoc(ref,{

      })
      swal({
        title: "Review sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setForm("");
    setRate(0);
    setLoading(false);
  };
  return (
    <div className="mt-4 w-full border-t-2 border-gray-500  py-1">
      <ReactStars
        size={30}
        half={true}
        value={rate}
        onChange={(rate) => setRate(rate)}
      />
      <input
        placeholder="share your thoughts...."
        className="w-full p-2 outline-none bg-slate-900 header"
        value={form}
        onChange={(e) => setForm(e.target.value)}
      />
      <button
        onClick={sendReview}
        className="w-full bg-green-700 flex justify-center  mt-4 p-3"
      >
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>
    </div>
  );
};

export default Reviwes;
