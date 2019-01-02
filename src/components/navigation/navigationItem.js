import React, {Component, Fragment} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class NavigationInfo extends Component{

    render() {
        const {id, name, icon, onChange} = this.props

        return(
            <li class='nav-item'>
                {/* <FontAwesomeIcon
                    icon={['fas',`${icon}`]}
                    size='lg'
                    color='#ddd'
                /> */}
                <span onClick={onChange} title={name}>{icon}</span>
            </li>
        )
    }
}

export default NavigationInfo