import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AllDiary from "./components/AllDiary";
import EntryModal from './components/EntryModal';
import PreviewModal from './components/PreviewModal';
import moment from 'moment';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [searchDate, setSearchDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isViewMode, setIsViewMode] = useState(false);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    setEntries(savedEntries);
    setFilteredEntries(savedEntries);
  }, []);

  const handleSaveEntry = (entry) => {
    const formattedDate = moment(entry.date, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const existingEntry = entries.find(e => moment(e.date, 'DD/MM/YYYY').format('YYYY-MM-DD') === formattedDate && e.id !== entry.id);

    if (existingEntry) {
      alert('Already one entry on this date');
      return;
    }

    let updatedEntries;
    if (entry.id) {
      updatedEntries = entries.map((e) => (e.id === entry.id ? entry : e));
    } else {
      entry.id = Date.now();
      updatedEntries = [...entries, entry].sort((a, b) => moment(b.date, 'DD/MM/YYYY').toDate() - moment(a.date, 'DD/MM/YYYY').toDate());
    }
    setEntries(updatedEntries);
    setFilteredEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
  };

  const handleAddEntry = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
    setIsViewMode(false);
  };

  const handleEditEntry = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
    setIsViewMode(false);
  };

  const handleRemoveEntry = (entry) => {
    const updatedEntries = entries.filter((e) => e.id !== entry.id);
    setEntries(updatedEntries);
    setFilteredEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    alert("This blog has been removed from the Diary.");
  };

  const handleViewEntry = (entry) => {
    setSelectedEntry(entry);
    setIsPreviewOpen(true);
  };

  const handleSearch = () => {
    const filtered = entries.filter((entry) => {
      const matchesDate = searchDate ? entry.date === moment(searchDate).format('DD/MM/YYYY') : true;
      const matchesTerm = searchTerm ? entry.title.includes(searchTerm) || entry.content.includes(searchTerm) : true;
      return matchesDate && matchesTerm;
    });
    setFilteredEntries(filtered);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={
          <AllDiary
            entries={filteredEntries}
            onEdit={handleEditEntry}
            onRemove={handleRemoveEntry}
            onView={handleViewEntry}
            handleAddEntry={handleAddEntry}
            searchDate={searchDate}
            setSearchDate={setSearchDate}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        } />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <EntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEntry}
        existingEntry={selectedEntry}
        isViewMode={isViewMode}
      />
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        entry={selectedEntry}
      />
    </>
  );
};

export default App;
