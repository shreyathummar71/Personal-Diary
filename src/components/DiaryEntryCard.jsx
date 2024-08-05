// DiaryEntryCard component to display a diary entry card with edit and remove buttons

const DiaryEntryCard = ({ entry, onEdit, onRemove, onView }) => (
  <div className=" p-4 m-2 shadow-md rounded-md bg-[#2F1409]" onClick={() => onView(entry)}>
    <h2 className="text-xl font-bold mt-2 text-white">{entry.title}</h2>
    <p className="text-white mb-5">{entry.date}</p>
    <img src={entry.image} alt={entry.title} className="w-full h-32 object-cover rounded-md" />
    <p className="text-white text-center mb-4">{entry.content}</p>
    <div className="mt-2 ">
      <button onClick={(e) => { e.stopPropagation(); onEdit(entry); }} className="btn-secondary float-end font-aclonica ml-2">Edit</button>
      <button onClick={(e) => { e.stopPropagation(); onRemove(entry); alert("This blog has been removed from the Diary."); }} className="btn-secondary float-end font-aclonica">Remove</button>
    </div>
  </div>
);

export default DiaryEntryCard;

