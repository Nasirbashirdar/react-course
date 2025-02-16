import React from "react";

function Card({ username = "ND", post = "Web Developer" }) {
  //   console.log(username);
  return (
    <div className="display-flex mx-auto bg-slate-300">
      <div className=" display-flex mx-auto bg-slate-500 w-40 h-40 rounded mb-2 mt-2">
        {" "}
        <img
          className="w-40 h-40 rounded object-cover mb-2 mt-2 shadow-lg"
          src="https://images.pexels.com/photos/30263623/pexels-photo-30263623/free-photo-of-artistic-flat-lay-with-photos-candle-and-compass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="card for photos"
        />
      </div>
      <h1 className="text-2xl bg-slate-600 text-white p-3 rounded">
        card for photos
      </h1>
      <div className="bg-slate-600 text-white p-3 rounded">
        {username} - {post}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        repudiandae repellat culpa deserunt quis non fugiat delectus ut, nam,
        voluptate libero magnam, distinctio expedita laborum?
      </p>
    </div>
  );
}

export default Card;
