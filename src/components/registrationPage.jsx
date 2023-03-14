import { useState } from "react";
import Illustration from "../assets/registrationIll.svg";
export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const correctCombinations = [
    {
      email: "jw_belguenbour@esi.dz",
      password: "12345678",
    },
  ];

  return (
    <div className="registration">
      <div className="register-text">
        <h1>Rejoinez les autres pour les former</h1>

        <img src={Illustration} alt="" />
      </div>
      <div className="register-form">
        <label>
          <p>Email:</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            placeholder="•••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          onClick={() => {
            correctCombinations.forEach((combination) => {
              if (
                combination.email === email &&
                combination.password === password
              ) {
                window.location.href = "/dashboard";
              } else {
                alert("Email ou mot de passe incorrect");
              }
            });
          }}
        >
          S'inscrire
        </button>
      </div>
    </div>
  );
}
