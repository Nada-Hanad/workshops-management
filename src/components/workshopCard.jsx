export default function WorkshopCard({ workshop }) {
  return (
    <div className="workshop-card">
      <div className="info">
        <h3>{workshop.title}</h3>
        <p>
          Date et heure : {workshop.date} à {workshop.hour}
        </p>
      </div>
      <button
        onClick={() => {
          window.location.href = "/workshopDetails";
        }}
        className="actions"
      >
        Savoir plus
      </button>
    </div>
  );
}
