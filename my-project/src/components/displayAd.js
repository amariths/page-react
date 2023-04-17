import React from 'react'
import styled from 'styled-components'

function displayAd(props) {
  return (
    <div>

    <Wrap>

        <ItemText>
            <h1 className='adtext1'>{props.msg}</h1>
            <p className='adtext2'>When you buy select AMD Radeon™ RX 6000 Series Graphics Cards</p>
        </ItemText>
        <ButtonGroup>
            <LeftButton>GAMING DESKTOPS</LeftButton>
            <RightButton>WORKSTATION DESKTOPS</RightButton>
        </ButtonGroup>


    </Wrap>


    </div>
  )
}

export default displayAd

const Wrap = styled.div`

background: url('images/last-of-us-.webp');
height: 95vh;
display: flex;
background-position: center;
background-size: cover;
`

const ItemText = styled.div`
font-size: 1.125em;;
font-weight: 400;
color: white;
display: grid;
margin-left: 15vh;
text-align: left;
margin-right: 0px;
width: 80vh;
word-wrap: break-word;

`



const ButtonGroup = styled.div`
display: flex;

`
const LeftButton = styled.div`
border: 2px solid white;
border-radius: 3px;
font-weight: 500;
font-size: 13px;
color: white;
text-align: center;
position: relative;
right: 80vh;
top: 49vh;
padding: 12px 30px;
height: 50px;
cursor: pointer;
`
const RightButton = styled.div`
border: 2px solid white;
border-radius: 3px;
font-weight: 500;
font-size: 13px;
color: white;
text-align: center;
position: relative;
right: 77vh;
top: 49vh;
padding: 12px 30px;
height: 50px;
cursor: pointer;
`
