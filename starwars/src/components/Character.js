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
                        <h3>Type: {character.type}</h3>

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
background: lavender;
border: 2px solid red;
border-radius:15%;
width:20%;
margin: 20px 0;
padding: 3px;
box-shadow: 5px 5px 20px black;
color: plum;
:hover{
    transition: all 0.25s ease-in-out;
    transform: scale(1.2) rotate(5deg);
}
`;

const Img = styled.img`
border:2px solid hotpink;
border-radius: 40%;
max-width: 70%;
:hover{
    transition: all 0.25s ease-in-out;
    transform: scale(0.7) rotate(-10deg);
}
`;

export default Cards;