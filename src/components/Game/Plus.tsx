import React from 'react';
import styled from 'styled-components';

type PlusProps = { size: string };

const CircledPlus = styled.div`
    font-size: ${(props: PlusProps) => props.size};
    border: 3px solid black;
    background-color: white;
    border-radius: 50%;
    width: ${(props: PlusProps) => props.size};;
    height: ${(props: PlusProps) => props.size};;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    line-height: ${(props: PlusProps) => props.size};
    position: relative;
`;

export default function Plus({ size }: PlusProps) {
    return <CircledPlus size={size}>+</CircledPlus>
}