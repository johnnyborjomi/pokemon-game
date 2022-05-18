import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    border: none;
    ${(props) => {
        const size = props.size || 'sm';
        switch (size) {
            case 'sm':
                return `border-radius: 5px;
                        padding: 3px 10px;
                `;
            case 'lg':
                return `border-radius: 10px;
                        padding: 15px 30px;`;
            default:
                return `border-radius: 0px;
                        padding: 0px 0px;`;
        }
    }}
    ${(props) => (props.disabled ? 'filter: brightness(0.3);' : '')}
    font-weight: bold;
    background: ${(props) => props.bg || 'white'};
    color: ${(props) => props.color || 'black'};
    &:hover {
        cursor: pointer;
    }
`;

const Btn = (props) => {
    return <StyledBtn {...props}>{props.children}</StyledBtn>;
};

export default Btn;
