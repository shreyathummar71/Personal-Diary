import DiaryEntryCard from './DiaryEntryCard';

const AllDiary = ({
  entries,
  onEdit,
  onRemove,
  onView,
  handleAddEntry,
  searchDate,
  setSearchDate,
  searchTerm,
  setSearchTerm,
  handleSearch
}) => {
  return (
    <div className="container mx-auto p-4 bg-secondary">
      <div className="mb-4">
      <img
            src="images/calendar.png"
            className="float-start h-9 w-9"
            alt="Instagram"
          />
        <button onClick={handleAddEntry} className="btn-primary font-aclonica">Add Entry</button>
        <div className="float-end flex">
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className=" p-2 rounded-full mr-2 bg-[#2F1409] bg-opacity-50 text-white font-aclonica "
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" p-2 rounded-full mr-2 bg-[#2F1409] bg-opacity-50 text-white font-aclonica"
          />
          <button onClick={handleSearch} className="btn-primary font-aclonica">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {entries.map((entry) => (
          <DiaryEntryCard
            key={entry.id}
            entry={entry}
            onEdit={onEdit}
            onRemove={onRemove}
            onView={onView}
          />
        ))}
      </div>
    </div>
  );
};

export default AllDiary;
