import React, {Component} from 'react'

class Boxcolor extends Component {
    


    render () {
        const {r, g, b} = this.props

        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
    
        function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }

       let hex = rgbToHex(r, g, b)
        

        const divStyle = {
            backgroundColor: hex,
        }
 
        return (
            <div className="IdCard box" style={divStyle}>   
                rgb({r}, {g}, {b})
                {hex}
            </div>
        )
    }
}

export default Boxcolor