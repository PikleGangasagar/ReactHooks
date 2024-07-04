import React, { Component } from 'react'
import ballerina from '../Shared/images/ballerina.jpg'
import assets from '../Shared/constantdata/constantdata'
export class MyImagesComp extends Component {
    render() {
        return (
            <div>
                <h2>My Images Component</h2>
                <img src={ballerina} width={500} height={500}/>
                <img src={assets.frock} width={500} height={500}/>
                <img src={assets.violin} width={500} height={500} alt='violin'/>
            </div>
        )
    }
}

export default MyImagesComp
