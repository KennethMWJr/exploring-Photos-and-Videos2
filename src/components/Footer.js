import React, {Component} from 'react'

class Footer extends Component{

    render() {

        return(
            <div className="footer">
                <div className="image-footer">                
                    <p>Thank you <a href="https://pixabay.com/"><img className="footer-image" src="https://pixabay.com/static/img/logo_square.png" alt="Pixabay"/></a> for the API.</p>
                </div>    
            </div>
        )
    }

}




export default Footer;