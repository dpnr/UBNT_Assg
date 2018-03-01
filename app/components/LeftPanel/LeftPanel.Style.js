import styled,{css} from 'styled-components';


export const Panel  = styled.div`
    float:left;
    position: relative;
    background-color: #d8d8d8;
    width : calc(100% - 300px);
    height : 100vh;
  `;

export const ItemContainer = styled.div`
  margin : 10px 10px;
`;

export const Range = styled.div`
    position:absolute;
    top:0px;
    left:0px;
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

export const Scale = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    color: grey;
    text-align: center;
    width : 100px;
    margin: 20px;
    border-style: solid;
    border-color: grey;
    border-width: 0px 2px 2px 2px; 
`;