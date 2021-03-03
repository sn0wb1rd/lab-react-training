import React, {Component} from 'react'

class Greetings extends Component {


    render () {
        const {lang, children} = this.props

        const dictionary = {
            de: "Gutentag", 
            en: "Hello",
            es: "Hola",
            fr: "Bonjour"
          }       
          
        function translate (dictionary, lang) {
            let greeting = "" 
            
            Object.entries(dictionary).forEach(([key,value]) => {
            if (lang === key) {
                greeting = value   
            }  
            })
            
            return greeting
        }          

        return (
            <div className="right IdCard box">
             {translate(dictionary, lang)} {children}            
            </div>            
        )
    }

}



export default Greetings
