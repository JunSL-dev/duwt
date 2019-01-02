import React, {Component} from 'react'

import CardSide from '../cardStation/cardSide'

class workStation extends Component{

    render(){
        const {workStation} = this.props

        if(workStation == "Cards"){
            return(
                <div class='work'>
                    <CardSide
                        onChange={this.handleWork}
                    />
                </div>
            )
        }
        if(workStation == "Graph"){
            return(
                <div class='work'>
                    ggs
                </div>
            )
        }
     }
}

export default workStation