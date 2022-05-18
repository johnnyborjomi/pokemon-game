import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: red;
    font-size: 1rem;
    padding: 2px 0 5px;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;
export default Title;