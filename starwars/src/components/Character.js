// Write your Character component here


import React from "react";
import styled from "styled-components";

const Cards = (props) => {
    const {data} = props;

    return (
        <CardHolderDiv>
            {data.map((character) => {
                return (
                    <Card>
                        <h2>Name: {character.name} </h2>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Status: {character.status} </h3>
                        <h3>Species: {character.species}</h3>

                        <Img src = {character.image}></Img>
                    </Card>
                );
            })}
        </CardHolderDiv>
    );
};

const CardHolderDiv = styled.div`
display: flex;
flex-flow:row wrap;
justify-content: space-around;
align-items: center;
`;

const Card = styled.div`
background: #009999;
border: 2px solid orange;
border-radius:20%;
width:30%;
margin: 20px 0;
padding: 3px;
box-shadow: 5px 5px 20px black;
color: salmon;
`;

const Img = styled.img`
border:2px solid lightgrey;
border-radius: 10%;
max-width: 100%;
`;

export default Cards;