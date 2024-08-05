const DiaryDetailsModal = ({ entry, isOpen, onClose }) => {
  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#2F1409] bg-opacity-50 p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">{entry.title}</h2>
        <p className="text-gray-700 mb-4">
          {new Date(entry.date).toLocaleDateString()}
        </p>
        {entry.image && (
          <img
            src={entry.image}
            alt={entry.title}
            className="rounded-lg mb-4"
          />
        )}
        <p className="text-gray-700 mb-4">{entry.content}</p>
        <button className="btn-secondary font-aclonica" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DiaryDetailsModal;
