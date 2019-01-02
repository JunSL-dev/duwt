import React, {Component} from 'react'

import NewCardForm from './newCardForm'

class Card extends Component{
    static defaultProps = {
        work:"add"
    }

    render(){

        const { work, card, onCreate } = this.props

        if(work == 'add'){
            return(
                <div id='work-area'>
                    <div class='container'>
                        <NewCardForm/>
                    </div>
                </div>
            )
        }
        return(
            <div id='work-area'>
                <div class='container'>
                    {card.accountNumber}
                </div>
            </div>
        )
    }
}

export default Card