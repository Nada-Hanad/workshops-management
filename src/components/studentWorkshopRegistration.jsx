import ill from "../assets/wIll.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function StudentWorkshopRegistrationPage() {
  return (
    <div className="register-workshop">
      <ToastContainer />
      <img src={ill} alt="" />
      <div className="student-form">
        <label>
          <p>Quel est votre état actuel ?</p>

          <select name="status" id="status">
            <option value="student" disabled></option>
            <option value="student">Etudiant</option>
            <option value="graduate">Gradué</option>
            <option value="unemployed">Sans emploi</option>
          </select>
        </label>
        <label>
          <p>Où souhaiteriez-vous être après l’atelier ?</p>
          <select name="status" id="status">
            <option value="student" disabled></option>
            <option value="student">Etudiant</option>
            <option value="graduate">Gradué</option>
            <option value="unemployed">Sans emploi</option>
          </select>
        </label>
        <button
          onClick={() => {
            toast.success("Inscription confirmée!", {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          S'inscrire
        </button>
      </div>
    </div>
  );
}
