// I want to import React and Component
import React, { Component } from 'react' 
import Ingredients from './Ingredients'

class BurgerStack extends Component {
    render () {
        return (
            <>
                <Ingredients />
            </>
        )
    }
}

export default BurgerStack