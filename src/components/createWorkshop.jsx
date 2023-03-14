import logout from "../assets/logout.svg";
import avatar from "../assets/avatar.jpg";
import { useState } from "react";
export default function CreateWorkshop() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const empolyeList = ["Harkat Kamel", "Second", "third"];
  return (
    <div className="create-workshop">
      <h1>Créer un atelier </h1>
      <div className="avatar">
        <img className="avatar" src={avatar} alt="" />
      </div>
      <img
        onClick={() => {
          window.location.href = "/admin";
        }}
        className="logout"
        src={logout}
        alt=""
      />
      <div className="add-form">
        <label>
          <p>Titre de l’atelier:</p>

          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <div className="date-time">
          <label>
            <p>Date:</p>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            <p>Heure:</p>
            <input
              type="time"
              placeholder="Heure"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
        </div>
        <label>
          <p>Employés:</p>
          <select>
            {empolyeList.map((empolye) => {
              return <option value={empolye}>{empolye}</option>;
            })}
          </select>
        </label>
        <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Créer
        </button>
      </div>
    </div>
  );
}
