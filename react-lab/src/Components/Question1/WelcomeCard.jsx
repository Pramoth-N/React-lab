const WelcomeCard = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          backgroundColor: "#f0f8ff",
        }}
      >
        <h1>Welcome to my App</h1>
        <h2>We're glad you're here. Explore and enjoy!</h2>
        <p>Your App Term</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
