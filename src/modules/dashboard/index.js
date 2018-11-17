import React from "react";
import { presenter } from "hoc/Presenter";
import Presenter from "./indexPM";
import { observer } from "mobx-react";

const Dashboard = () => <div className="dashboard">Dashboard</div>;

export default observer(presenter(Presenter, Dashboard));
