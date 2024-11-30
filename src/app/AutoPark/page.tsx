"use client"
import React, {useState} from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import Graphic from "@/app/components/AutoPark/Graphic";
import DataTable from "@/app/components/AutoPark/Table";
import Header from "@/app/components/AutoPark/Header";
import Scheme from "../components/AutoPark/Scheme";
import GraphicButtons from "@/app/components/AutoPark/GraphicButtons";
import RepairButtons from "@/app/components/AutoPark/RepairButtons";
import RepairTable from "@/app/components/AutoPark/RepairTable";


const AutoPark = () => {

    const [dataIndex,setDataIndex] = useState(-1);

    const [wheel, setWheel] = useState(-1);

    return <> <ProfileMenu height={'100vh'} activeField={'Автопарк'} />
                <Header />
                <DataTable dataIndex={dataIndex} setDataIndex={setDataIndex}/>

                <Scheme wheel={wheel} setWheel={setWheel} dataIndex={dataIndex}/>
                <GraphicButtons />
                <Graphic wheel={wheel} max={12}/>
                <RepairButtons />
                <RepairTable />
    </>
}

export default AutoPark;