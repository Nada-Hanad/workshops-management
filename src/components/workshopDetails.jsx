import logout from "../assets/logout.svg";
import avatar from "../assets/avatar.jpg";

export default function WorkshopDetails() {
  const teachersDetails = [
    {
      name: "Harkat Kamel",
      etatActuel: 12,
      etatFuture: 14,
    },
    {
      name: "Harkat Kamel",
      etatActuel: 12,
      etatFuture: 14,
    },
    {
      name: "Harkat Kamel",
      etatActuel: 12,
      etatFuture: 14,
    },
    {
      name: "Harkat Kamel",
      etatActuel: 12,
      etatFuture: 14,
    },
    {
      name: "Harkat Kamel",
      etatActuel: 12,
      etatFuture: 14,
    },
    {
      name: "Harkat Kamel",
      etatActuel: 12,
      etatFuture: 14,
    },
  ];
  return (
    <div className="workshop-details">
      <h1>Détails de l’atelier </h1>
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
      <div className="details">
        <h2>Informations des employés :</h2>
        <div className="details-table">
          <div className="details-table-row header">
            <div className="cell">Nom et prenom</div>
            <div className="cell">Etat actuel</div>
            <div className="cell">Etat future</div>
          </div>
          {teachersDetails.map((teacher) => (
            <div className="details-table-row">
              <div className="cell">{teacher.name}</div>
              <div className="cell">{teacher.etatActuel}</div>
              <div className="cell">{teacher.etatFuture}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
