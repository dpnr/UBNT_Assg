import styled,{css} from 'styled-components';
import {ItemContainer} from '../LeftPanel/LeftPanel.Style';
import arrow from '../../assets/expand-button.png'; 
import arrow_hover from '../../assets/expand-button-hover.png'; 


export const Panel = styled.div`
    
    float: right;
    background-color: black;
    width: 300px;
    height : 100vh;
    z-index : 9999;
  
`;

export const SubPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled(ItemContainer)`
    
    display: flex;
    flex-direction: column;
    color: #c3c3be;

`;
export const ItemHeading = styled(ItemContainer)`
    align-self: flex-start;
    color: grey;
    font-size: 20px;
`;

export const Options = styled.input`
    color: #c3c3be;
    font-size: 16px;
`;



export const Select = styled.select`
    color: #eff3f4;
    width: 250px;
    box-shadow: none;
    padding-left: 5px;
    background: url(${arrow}) no-repeat 95% ;
    
    // background: transparent;
    
    -webkit-appearance: none;
    -webkit-border-radius: 0;


    &:hover{
        outline: none;
        color: black;
        background: url(${arrow_hover}) no-repeat 95% ;
        background-color: grey;
        
    }
`;

export const Label = styled.label`
    color: #eff3f4;
    padding-left: 10px;
`;

export const Span = styled.span`
    padding-left: 10px;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    width: 260px;
    margin: 0 auto;
    border-style: solid;
    border-color: white;
    border-width: 1px 0px 0px 0px;
`;

export const Buttons = styled.div`
    padding-top: 20px;
    margin: 0 auto;
   
`;

export const Save =styled.button`
    background-color: #189fdf;
    color: white;
    
`;

export const Cancel = styled.button`
    margin-left : 30px;
    background-color: black;
    color: #1779b5;
    border: none;
    &:hover{
        background-color: black;
    }

`;