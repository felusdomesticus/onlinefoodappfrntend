import {Link} from "react-router-dom";
import React,{Component} from 'react';
import HelloWorldService from "../../api/HelloWorldService";

class WelcomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            welcomeMessage : null
        }
    }

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name} to Online Food App , restaurant meal list is <Link
                    to="/meallist">here</Link>
                </div>

                <div className="container">
                    Click here to get a customized message from backend!
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }

    retrieveWelcomeMessage = () => {
        //HelloWorldService.executeHelloWorldService().then(response => this.handleSuccessfullResponse(response));
        //HelloWorldService.executeHelloWorldBeanService().then(response => this.handleSuccessfullResponse(response));
        HelloWorldService.executeHelloWorldBeanServicePathVariable(this.props.match.params.name)
            .then(response => this.handleSuccessfullResponse(response))
            .catch(error => this.handleError(error));
    };


    handleSuccessfullResponse = (response) => {
        console.log(response);
        //this.setState({welcomeMessage: response.data});
        this.setState({welcomeMessage: response.data.message});
    };

    handleError = (error) => {
        console.log(error.response);
        this.setState({welcomeMessage: error.response.data.message})
    };
}

export default WelcomeComponent;