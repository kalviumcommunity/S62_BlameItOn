import React, { useState } from "react";
import ExcuseCard from "../components/Card/ExcuseCard.jsx";

const ExcuseList = () => {
  // State to manage list of excuses
  const [excuses, setExcuses] = useState([
    {
      id: 1,
      category: "Funny",
      excuse: "My dog ate my homework.",
      likes: 5,
    },
    {
      id: 2,
      category: "Formal",
      excuse: "I was stuck in traffic due to an accident.",
      likes: 12,
    },
    {
      id: 3,
      category: "Risky",
      excuse: "I accidentally sent my boss a meme instead of the report.",
      likes: 8,
    },
  ]);

  // Function to handle likes
  const handleLike = (id) => {
    setExcuses((prevExcuses) =>
      prevExcuses.map((excuse) =>
        excuse.id === id ? { ...excuse, likes: excuse.likes + 1 } : excuse
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Excuse Generator
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
        {excuses.map((excuse) => (
          <ExcuseCard
            key={excuse.id}
            category={excuse.category}
            excuse={excuse.excuse}
            likes={excuse.likes}
            onLike={() => handleLike(excuse.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExcuseList;
