import React, {Component} from 'react'

import image from '../../image/ic.png'
import left_arrow from '../../image/left-arrow.png'

class NewCardForm extends Component{
    render(){
        return(
            <form id='card-from'>
                <div id='card-info'>
                    <div class='container'>
                        <select id="choose-bank">
                            <option>눌러서 은행을 선택해주세요</option>
                            <option>Kakao Bank</option>
                            <option>KB</option>
                            <option>NH</option>
                        </select>
                        <div id="icChip">
                            <img id='card-arrow' src={left_arrow}/>
                            <img src={image}/>
                        </div>
                    </div>
                </div>
                <div id='submit'>

                </div>
            </form>
        )
    }
}

export default NewCardForm