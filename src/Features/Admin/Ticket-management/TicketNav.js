import React from "react";
import { Link } from "react-router-dom";

const TicketNav = () => {
  return (
    <div>
      <Link to="/ticket/create" exact style={{ color: "black" }}>
        Create ticket
      </Link>
    </div>
  );
};

export default TicketNav;
