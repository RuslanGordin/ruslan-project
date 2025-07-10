'use client'
import React from 'react';
import {ITabs} from "@/app/components/arrays";
import {DivBoxItemTabSC, TextTabSC} from "@/app/components/custom/tablet/tablet.styles";


interface ITab {
    ItemTab: ITabs
}

const ItemTab = (props: ITab) => {
    const {ItemTab} = props
    const {
        name,
        link
    } = ItemTab;

    return (
        <DivBoxItemTabSC href={link}>
            <TextTabSC>
            {name}
            </TextTabSC>
        </DivBoxItemTabSC>
    );
};

export default ItemTab;
