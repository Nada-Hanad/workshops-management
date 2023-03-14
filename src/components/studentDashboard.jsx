import avatar from "../assets/avatar.jpg";
import logout from "../assets/logout.svg";

export default function StudentDashboardPage() {
  const workshopsList = [
    {
      title: "Workshop1",
      hour: "13:00",
      date: "17 March 2023",
    },

    {
      title: "Workshop2",
      hour: "13:00",
      date: "17 March 2023",
    },
    {
      title: "Workshop3",
      hour: "13:00",
      date: "17 March 2023",
    },
  ];
  return (
    <div className="dashboard-page">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <h1>
        Bienvenue <span>Mr Belguenbour </span>
        Créez des ateliers et partagez le savoir!
      </h1>
      <div className="workshop-list">
        <h2>Liste des ateliers crés:</h2>
        <div className="workshop-list-container">
          {workshopsList.map((workshop) => (
            <div className="workshop-card">
              <div className="info">
                <h3>{workshop.title}</h3>
                <p>
                  Date et heure : {workshop.date} à {workshop.hour}
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.href = "/registerInWorkshop";
                }}
                className="actions"
              >
                S'inscrire
              </button>
            </div>
          ))}
        </div>
      </div>

      <img
        onClick={() => {
          window.location.href = "/";
        }}
        className="logout"
        src={logout}
        alt=""
      />
    </div>
  );
}
