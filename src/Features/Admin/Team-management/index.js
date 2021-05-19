import React from "react";
import TeamNav from "./teamNav";
import Table from "../../../Components/TableView";
import Text from "../../../Components/TextView";

const Team = () => {
  return (
    <div className="team">
      <Text titleName={"Team Page"} />
      <br></br>
      <TeamNav />
      <Table />
    </div>
  );
};

export default Team;
