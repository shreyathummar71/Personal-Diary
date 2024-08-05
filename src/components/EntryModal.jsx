import React, { useState, useEffect } from 'react';
import moment from 'moment';

// EntryModal component for adding/editing a diary entry
const EntryModal = ({ isOpen, onClose, onSave, existingEntry, isViewMode }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  // Use effect to populate fields if editing an existing entry
  useEffect(() => {
    if (existingEntry) {
      setTitle(existingEntry.title);
      setDate(moment(existingEntry.date, 'DD/MM/YYYY').format('YYYY-MM-DD')); // Format to YYYY-MM-DD for input field
      setImage(existingEntry.image);
      setContent(existingEntry.content);
    } else {
      setTitle('');
      setDate('');
      setImage('');
      setContent('');
    }
  }, [existingEntry]);

  // Handle save action
  const handleSave = () => {
    if (title && date && image && content) {
      const formattedDate = moment(date).format('DD/MM/YYYY');
      onSave({ ...existingEntry, title, date: formattedDate, image, content });
      onClose();
    } else {
      alert('All fields are required');
    }
  };

  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-[#2F1409] bg-opacity-75  p-4 rounded-md shadow-md">
        <h2 className="text-2xl text-white font-aclonica ml-4 mb-6">{isViewMode ? 'View Entry' : existingEntry ? 'Edit Entry' : 'Add New Entry'}</h2>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="border p-2 mb-2 w-full" 
          disabled={isViewMode} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="border p-2 mb-2 w-full" 
          disabled={isViewMode} 
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          className="border p-2 mb-2 w-full" 
          disabled={isViewMode} 
        />
        <textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          className="border p-2 mb-2 w-full" 
          disabled={isViewMode} 
        />
        {isViewMode ? (
          <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded-md">Close</button>
        ) : (
          <>
            <button onClick={handleSave} className="float-end btn-secondary font-aclonica mr-2">Save</button>
            <button onClick={onClose} className="float-end btn-secondary mr-2 font-aclonica">Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EntryModal;
