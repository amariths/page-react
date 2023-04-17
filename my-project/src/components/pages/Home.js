import React, { useContext } from 'react'
import DisplayAd from '../displayAd'
import ProductCard from '../ProductCard'
import styled from 'styled-components'
import { UserContext } from '../../UserContext'

function Home(props) {
    const msg = useContext(UserContext)




    return (
        <div id="offer2">
            <DisplayAd msg="GET THE GAME!" />
            <Wrap>
                <h1>välkommen till shop</h1>
                <h1>{msg}</h1>
                <h1>{props.message}</h1>

            </Wrap>


            <ProductCard />
        </div>
    )
}

export default Home

const Wrap = styled.div`
    color: white;
`
