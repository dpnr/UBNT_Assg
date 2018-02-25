import styled,{css} from 'styled-components';


export const Panel  = styled.div`
    float:left;
    background-color: #d4d4d4;
    width : calc(100vw - 300px);
    height : 100vh;
  `;

export const ItemContainer = styled.div`
  margin : 10px 10px;
`;

export const Range = styled.div`
    
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
    background: rgba(68, 137, 244, 0.4); 
    border-radius: 50%;

    ${({coverage})=> coverage && css` 
          width : ${coverage}px;
          height : ${coverage}px;
       `};
    
`;

export const Image = styled.img`
    display:block;
    margin:auto;
    vertical-align: middle;
`;