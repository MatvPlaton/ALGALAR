"use client"
import React from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import YandexMap from "../components/Location/Map";
import ProfileTitle from "../components/Location/ProfileTitle";
const Page = () => {

    return <>
        <ProfileMenu height={'100vh'} activeField={'Местоположение авто'}/>
        <ProfileTitle />
            <YandexMap coordinates={[55.751244, 37.618423]} /> {/* Example coordinates for Moscow */}
        </>
}

export default Page;