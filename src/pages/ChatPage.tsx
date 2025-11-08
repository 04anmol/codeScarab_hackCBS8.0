import { useNavigate } from "react-router-dom";
import Chat from "@/components/Chat";

const ChatPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="h-screen overflow-hidden">
      <Chat isOpen={true} onClose={handleClose} />
    </div>
  );
};

export default ChatPage;

