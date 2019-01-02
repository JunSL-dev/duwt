import React, {Component} from 'react'
import NavigationItem from './navigationItem'

class Navigation extends Component{   

    state = {
        navi:[
            {
                id:0,
                name:"Cards",
                icon:"Card"
            },
            {
                id:1,
                name:"Graph",
                icon:"Chart"
            }
        ]
    }

    render(){
        const {onChange} = this.props

        const {navi} = this.state
        const list = navi.map(item => (
            <NavigationItem
                key={item.id}
                name={item.name}
                icon={item.icon}
                onChange={onChange}
            />
        ))
        return (
            <div class='nav'>
                <div class='container'>
                {list}
                </div>
            </div>
        )
    }
}

export default Navigation