const DonationCards = () => {
    const handleDonate = (category) => {
      alert(`Thank you for your donation to ${category}!`);
    };
  return (
    <section
      style={{
        display: "flex",
        padding: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Education</h3>
        <p>Support education initiatives for underprivileged children.📚</p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
          }}
            onClick={() => handleDonate("Education")}
        >
          Donate Now
        </button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>HealthCare</h3>
        <p>Support healthcare initiatives for underprivileged communities.🏥</p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={() => handleDonate("HealthCare")}
        >
          Donate Now
        </button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Food Aid</h3>
        <p>
          Support food security initiatives for underprivileged communities.�
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={() => handleDonate("Food Aid")}
        >
          Donate Now
        </button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Emergency Relief</h3>
        <p>
          Support emergency relief efforts for disaster-affected communities.🧰
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
          }}
            onClick={() => handleDonate("Emergency Relief")}
        >
          Donate Now
        </button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Orphan Support</h3>
        <p>
          Provide love, care, and support to orphaned children for a brighter
          future.👶
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
          }}
            onClick={() => handleDonate("Orphan Support")}
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonationCards;
