import { useState, useEffect } from "react";
import DiaryDetailsModal from "./DiaryDetailsModal";

const AllDiary = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    storedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(storedEntries);
  }, []);

  const handleTitleClick = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="container mx-auto p-4 bg-secondary">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="card bg-primary text-white p-4 rounded-lg shadow-lg mb-4"
          >
            <h3
              className="text-xl mb-2 font-aclonica cursor-pointer"
              onClick={() => handleTitleClick(entry)}
            >
              {entry.title}
            </h3>
            <p className="font-aclonica pb-2">
              {new Date(entry.date).toLocaleDateString()}
            </p>
            {entry.image && (
              <img
                src={entry.image}
                alt={entry.title}
                className="rounded-lg mb-4"
              />
            )}
            <p className="text-white font-aclonica">content</p>
            <button className="btn-secondary float-end ml-2 font-cardo">
              Remove
            </button>
            <button className="btn-secondary float-end font-cardo">Edit</button>
          </div>
        ))}
      </div>
      <DiaryDetailsModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AllDiary;
