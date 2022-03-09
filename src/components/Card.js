import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center
`

const CardBox = styled.div`
  width: 200px;
  height:200px;
  background: blue;
  color: white;
  margin: 1em;
  padding: 1em;

  p{
      font-size: 0.7em
  }
`



const Card = ( {results} ) => {
  return (
    <CardContainer>
        
        {
            results && results.map(result => (
                <CardBox>
                <h2> {result.id} </h2>
                <p> {result.title} </p>
                <p> {result.body} </p>
            </CardBox>
            ))
        }

       
    </CardContainer>
  )
}

export default Card