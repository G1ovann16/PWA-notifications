import axios from "axios";
import React, { useState } from "react";

const FormComponents = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/data", { title, message })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>Holaa</h1>
      <div>
        <input
          type="text"
          placeholder="pls write title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="pls write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </>
  );
};

export default FormComponents;
