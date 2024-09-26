// Parent component
function Shows() {
  // Updated to an array of showInfo objects
  const showInfo = [
    {
      id: 1,
      date: 'OCT 08, 2024',
      venue: "Arts Council",
      location: 'Karachi'
    },
    {
      id: 2,
      date: 'OCT 10, 2024',
      venue: "Expo Center",
      location: 'Lahore'
    },
    {
      id: 3,
      date: 'OCT 15, 2024',
      venue: "PNCA",
      location: 'Islamabad'
    }
  ];

  return (
    <>
      <div className="show-block-parent">
        <h1>SHOWS</h1>
        {/* Use map to iterate over the showInfo array */}
        {showInfo.map(show => (
          <ChildComponent key={show.id} showInfo={show} />
        ))}
      </div>
    </>
  );
}

// Child component
function ChildComponent({ showInfo }) {
  return (
    <>
      <div className="show-block-container">
        <p className="date-concert">{showInfo.date}</p>
        <p>{showInfo.venue}</p>
        <p>{showInfo.location}</p>
        <button>Get Tickets</button>
      </div>
    </>
  );
}

export default Shows;
