import React, {Component} from 'react'


class Random extends Component {

    render () {
        const {min, max} = this.props
        let num = Math.floor(Math.random() * max) + min
        console.log(min, max, num)
        return (
            <div className="IdCard box">
                Random value between {min} and {max} => {num}
            </div>

        )
    }
}

export default Random