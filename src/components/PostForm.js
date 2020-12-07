import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            send: false,
            buttonText: 'Send Message'
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent!'
        })
    }


    submitHandler = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        const params = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message }
        console.log(params)
     
        axios
            .post('http://localhost:5000/send', params)
            .then(res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch(() => {
                console.log('Message not sent');
        })
    }
        

   

    

    render() {
        const { name, email, message } = this.state
        return (
            <div className="contact-form">
                <h1> Contact form test</h1>
                <form onSubmit={this.submitHandler}>
                    <div> 
                        <input type="text"
                               name="name"
                               value={name}
                               onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text"
                            name="message"
                            value={message}
                            onChange={this.changeHandler}></input>
                    </div>
                <button type="submit">{this.state.buttonText}</button>
                </form>
            </div>
        );
    }
}

export default PostForm;

