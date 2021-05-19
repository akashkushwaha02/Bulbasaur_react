import React from "react";
import Card from "../cards/Card";
import Table from "../TableView";
import Text from "../TextView";
import Search from "../SearchView";
import Filter from "../Filter";

function Main() {
  let theadField = ["Title", "Name", "Date"];
  let cardColor1 = "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)";
  let cardColor2 = "linear-gradient(to right, #00ffcc 0%, #ccff66 100%)";
  let cardColor3 = "linear-gradient(to right, #ff9900 0%, #66ccff 100%)";
  let tbodyData = [
    { title: "Project1", name: "Project1", Date: "22-01-2021"},
    { title: "Project2", name: "Project1", Date: "22-01-2021"},
    { title: "Project3", name: "Project1", Date: "22-01-2021"},
    { title: "Project4", name: "Project1", Date: "22-01-2021"},
    { title: "Project5", name: "Project1", Date: "22-01-2021"},
    { title: "Project6", name: "Project1", Date: "22-01-2021"},
    { title: "Project7", name: "Project1", Date: "22-01-2021"},
    { title: "Project8", name: "Project1", Date: "22-01-2021"},
    { title: "Project9", name: "Project1", Date: "22-01-2021"},
    { title: "Project10", name: "Project1", Date: "22-01-2021"},
  ];
  return (
    <div className="main">
      {/* <Text titleName={"Home page"} /> */}
      <div className="f-dir-row-space-around m-top">
        <Card backgroundColor={cardColor1}/>
        <Card backgroundColor={cardColor2}/>
        <Card backgroundColor={cardColor3}/>
      </div>
      <div className="mainTable">
        <div>
          <Search/>
          <Filter/>
        </div>
        <Table thead={theadField} tbody={tbodyData}/>
      </div>
    </div>
  );
}

export default Main;
