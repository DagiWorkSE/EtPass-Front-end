import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaTable,FaThList } from "react-icons/fa";
import ActiveApplicationTable from "./ActiveApplicationTable";
import ActiveApplications from "./ActiveApplications";
import '../styles/Tab.css';
const ActiveApplicationTabs = () => {
    return (
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-5 mx-auto px-0"
          justify
        >
          <Tab eventKey="home" title={<FaThList/>}>
            <ActiveApplications/>
          </Tab>
          <Tab eventKey="contact" title={<FaTable/>}>
            <ActiveApplicationTable/>
          </Tab>
        </Tabs>
      );
};

export default ActiveApplicationTabs;

