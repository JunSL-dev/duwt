import React, {Component, Fragment} from 'react'

import Card from './card'

class cardSide extends Component{

    state = {
        work : "",
        cards:[
            {
                id:0,
                owner:"이승준",
                bank:"농협",
                cardNumber:"4854-7902-0099-0096",
                accountNumber:"3021053651971",
                cvc:"779",
                dueDate:"07/21",
                balance:"0"
            },
            {
                id:1,
                owner:"이승준",
                bank:"카카오뱅크",
                cardNumber:"5365-1004-2857-9342",
                accountNumber:"3333068050563",
                cvc:"479",
                dueDate:"02/23",
                balance:"224,371"
            }
        ]
    }

    handleWork = (e) => {
        this.setState({
            work : e.target.title
        })
    }

    handleCreate = (data) => {
        const {cards} = this.state

        this.setState({
            cards:cards.concat({id:this.id++,...data})
        })
    }

    render(){
        const {work, cards} = this.state

        const list = cards.map(card => (
        <li class='side-nav-item' style={{top:-(card.id+1) +"px"}} onClick={this.handleWork} title={card.id}>{card.bank}</li>
        ))

        return (
            <Fragment>
                <div id='side-nav'>
                    <div id='side-container' style={{height:(cards.length-1)*130*2 + "px"}}>
                        {list}
                        <li class='side-nav-item' style={{top:-(cards.length+1) +"px"}} onClick={this.handleWork} title='add'>+</li>
                    </div>
                </div>
                <Card
                    card={cards.find(card => card.id==work)}
                    work={work}
                    onCreate={this.handleCreate}
                />
            </Fragment>
        )
    }
}

export default cardSide