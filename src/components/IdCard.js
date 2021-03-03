import React, {Component} from 'react'

class IdCard extends Component {

    render (){
        // console.log(this.props)
        const {lastName, firstName, gender, height, birth, picture} = this.props

        return(
            <div className="IdCard box">
                <img src={picture} />
                <div className="right">
                    <strong>First Name: </strong>{firstName}<br />          
                    <strong>Last Name: </strong>{lastName}<br />  
                    <strong>Gender: </strong>{gender}<br /> 
                    <strong>Height: </strong>{height}<br /> 
                    <strong>Birth: </strong>{birth}<br /> 
                </div>


            </div>

            
        )
    }





}



export default IdCard