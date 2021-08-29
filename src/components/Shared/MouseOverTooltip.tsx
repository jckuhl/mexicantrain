import React from "react";
import styled from 'styled-components';

const Hover = styled.div`
    display: flex;

    &:hover .tooltip {
        visibility: visible;
    } 
`;

const Tooltip = styled.span`
    visibility: hidden;
`;

type props = {
    msg: string;
    children?: JSX.Element| JSX.Element[];
}

export default function MouseOverTooltip({ msg, children }: props) {
    return <Hover>
        {children}
        <Tooltip className="tooltip">{msg}</Tooltip>
    </Hover>
}