import React from "react";

const Dashboard = ({ strikes, fouls, balls, hits }) => {
  return (
    <div>
      <div>Dashboard</div>
      <button onClick={strikes}>Strike</button>
      <button onClick={balls}>Ball</button>
      <button onClick={fouls}>Foul</button>
      <button onClick={hits}>Hit</button>
    </div>
  );
};
export default Dashboard;
