import Modal from 'react-modal';

const PreviewModal = ({ isOpen, onClose, entry }) => {
  if (!entry) return null;

  // Custom styles for the modal content and overlay
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',  // Adjust the width as needed
      height: 'auto',  // Adjust the height as needed
      maxHeight: '80vh',  // Ensures the modal doesn't exceed the viewport height
      padding: '20px',
      backgroundColor: 'rgba(47, 20, 9)', // Background color with 50% opacity
      border: 'none',  // Remove the white border
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust overlay background color as needed
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Preview Entry Modal"
      style={customStyles}
    >
      <div className="modal-content">
        <h2 className="text-xl text-white font-bold mt-2">{entry.title}</h2>
        <p className="text-white mb-2">{entry.date}</p>
        <img src={entry.image} alt={entry.title} className="w-full h-64 object-cover rounded-md" />
        <p className="mt-3 text-white mb-3">{entry.content}</p>
        <button onClick={onClose} className="mt-3 float-end btn-secondary font-aclonica">Close</button>
      </div>
    </Modal>
  );
};

export default PreviewModal;
