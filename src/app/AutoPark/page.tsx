"use client"
import React, {useState} from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import DataTable from "@/app/components/AutoPark/Table";
import Header from "@/app/components/AutoPark/Header";
import Scheme from "../components/AutoPark/Scheme";
import GraphicButtons from "@/app/components/AutoPark/GraphicButtons";
import RepairButtons from "@/app/components/AutoPark/RepairButtons";
import RepairTable from "@/app/components/AutoPark/RepairTable";


const AutoPark = () => {

    const [,setDataIndex] = useState(0);
    return <> <ProfileMenu height={'100vh'} activeField={'Автопарк'} />
                <Header />
                <DataTable setDataIndex={setDataIndex}/>

                <Scheme />
                <GraphicButtons />
                <RepairButtons />
                <RepairTable />
    </>
}

export default AutoPark;