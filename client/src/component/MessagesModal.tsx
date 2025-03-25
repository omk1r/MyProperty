import { useEffect, useState } from 'react';
import axios from 'axios';

interface Message {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}

interface MessagesModalProps {
  propertyId: string;
  onClose: () => void;
}

const MessagesModal: React.FC<MessagesModalProps> = ({
  propertyId,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/message/get/${propertyId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [propertyId]);

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[#1A1A1A] mx-4 p-6 rounded-lg w-full max-w-3xl">
        <h2 className="mb-4 font-semibold text-white text-xl">Enquiries</h2>
        <button
          onClick={onClose}
          className="top-4 right-4 absolute text-white text-lg"
        >
          ✕
        </button>
        {loading ? (
          <p className="text-gray-400">Loading messages...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-400">No messages found for this property.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-[#141414] p-4 border border-[#262626] rounded-md"
              >
                <p className="text-gray-400 text-sm">
                  <strong>Name:</strong> {msg.firstname} {msg.lastname}
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Email:</strong> {msg.email}
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Phone:</strong> {msg.phone}
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Message:</strong> {msg.message}
                </p>
                <p className="mt-2 text-gray-500 text-xs">
                  Sent on: {new Date(msg.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesModal;
