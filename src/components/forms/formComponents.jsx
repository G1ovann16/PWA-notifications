import React from "react";

const FormComponents = () => {
const handleSubmit = () =>{
    // save all data and send to server like notification
}
  return (
    <div>
      <form method="post">
        <ul>
          <li>
            <label for="title">Título:</label>
            <input type="text" id="title" name="Título" />
          </li>
          <li>
            <label for="mensaje">Mensaje</label>
            <input type="mensaje" id="mensaje" name="mensaje" />
          </li>
        </ul>
        <button onClick={handleSubmit}>send</button>
      </form>
    </div>
  );
};

export default FormComponents;
