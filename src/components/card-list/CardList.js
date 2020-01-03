import React from 'react'
import Card from '../card/Card'
import './cardList.css';

const CardList = (props) => {
    return (
        <div className='cardList'>
            {
              props.monsters.map(monster => {
                return <Card key={monster.id} monster={monster}/>
              })
            }
        </div>
    )
}

export default CardList