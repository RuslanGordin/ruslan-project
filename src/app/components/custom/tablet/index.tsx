'use client'
import React from 'react';
import {DivBoxTabletSC} from "@/app/components/custom/tablet/tablet.styles";
import {tabs} from "@/app/components/arrays";
import ItemTab from "@/app/components/custom/tablet/tab";

const Tablet = () => {

    return (
        <DivBoxTabletSC>
            {tabs.map((tab, i) => {
                return (
                    <ItemTab key={`hdfsdfsffdh${i}`} ItemTab={tab} />
                )
            })}
        </DivBoxTabletSC>
    );
};

export default Tablet;
