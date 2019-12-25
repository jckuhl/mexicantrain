import styled from 'styled-components';

type PipProps = { color?: string, size?: string  };

export default styled.div`
    background-color: ${(props:PipProps) => props.color ? props.color : 'black'};
    width: ${(props:PipProps) => props.size ? props.size : '10px'};
    height: ${(props:PipProps) => props.size ? props.size : '10px'};
    border: none;
    border-radius: 50%;
    margin: auto;
`;