import "./ChatMain.css";
import userIcon from "/user-icon.png";
import gptImgLogo from "/chatgptLogo.svg";

const Chats = ({ messages }) => {
  return (
    <div className="chats">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat ${message.isBot ? "bot bg-blue-900" : "user ml-96"}`}
        >
          {message.isBot ? (
            <img className="chatimg" src={gptImgLogo} alt="Bot" />
          ) : (
            <img className="chatimg" src={userIcon} alt="User" />
          )}
          <p className="text-2xl text-wrap">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
