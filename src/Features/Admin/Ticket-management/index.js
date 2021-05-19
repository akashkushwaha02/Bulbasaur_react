import React from "react";
import TicketNav from "./ticketNav";
import Table from "../../../Components/TableView";
import Text from "../../../Components/TextView";

const Ticket = () => {
  return (
    <div className="ticket">
      <Text titleName={"Ticket"} />
      <TicketNav />
      <Table />
    </div>
  );
};

export default Ticket;
