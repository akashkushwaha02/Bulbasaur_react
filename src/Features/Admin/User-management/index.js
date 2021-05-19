import React from "react";

import Table from "../../../Components/TableView";
import Text from "../../../Components/TextView";
import UserNav from "./userNav";

const User = () => {
  return (
    <div className="user">
      <Text titleName={"User Page"} />
      <UserNav />
      <Table></Table>
    </div>
  );
};

export default User;
