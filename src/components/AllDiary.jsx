import { useState, useEffect } from "react";
const AllDiary = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    // Sort entries by date (newest first)
    storedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(storedEntries);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="card bg-primary text-white p-4 rounded-lg shadow-lg mb-4"
          >
            <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
            <p>{new Date(entry.date).toLocaleDateString()}</p>
            {entry.image && (
              <img
                src={entry.image}
                alt={entry.title}
                className="rounded-lg mb-4"
              />
            )}
            <p className="text-white">content</p>
            <button className="btn-secondary float-end ml-2">Remove</button>
            <button className="btn-secondary float-end">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDiary;
