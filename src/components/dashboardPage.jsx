import avatar from "../assets/avatar.jpg";
import WorkshopCard from "./workshopCard";
import logout from "../assets/logout.svg";

export default function DashboardPage() {
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
    {
      title: "Workshop4",
      hour: "13:00",
      date: "17 March 2023",
    },
    {
      title: "Workshop5",
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
            <WorkshopCard workshop={workshop} />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          window.location.href = "/createWorkshop";
        }}
        className="create-button"
      >
        Créer
      </button>

      <img
        onClick={() => {
          window.location.href = "/admin";
        }}
        className="logout"
        src={logout}
        alt=""
      />
    </div>
  );
}
