import styled,{css} from 'styled-components';
import {ItemContainer} from '../LeftPanel/LeftPanel.Style';


export const Panel = styled.div`
    
    float: right;
    background-color: black;
    width: 300px;
    height : 100vh;
  
`;

export const SubPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemHeading = styled(ItemContainer)`
    align-self: flex-start;
    color: grey;
    font-size: 20px;
`;

export const Options = styled.input`
    color: white;
    font-size: 16px;
`;

export const Dropdown = styled.div`
    border: 1px solid #ccc;
    width: 120px;
    border-radius: 3px;
    overflow: hidden;
    background: #fafafa url("img/icon-select.png") no-repeat 90% 50%;
`;

export const Select = styled.select`
    color: white;
    width: 250px;
    box-shadow: none;
    background: transparent;
    background-image: none;
    // -webkit-appearance: none;
    
    &:hover{
        outline: none;
        background-color: grey;
    }
`;

export const Label = styled.label`
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
    padding-left : 30px;
    background-color: black;
    color: #1779b5;
    border: none;
    &:hover{
        background-color: black;
    }

`;