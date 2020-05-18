import React, { Component } from 'react'
import PostOfficeDetails from './PostOfficeDetails'

export class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pincode:props.pin,
            isLoaded: false,
            postoffice: [],
            error: null
        }
    }


    componentDidMount() {
        fetch("https://api.postalpincode.in/pincode/"+this.props.pin)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true, postoffice: data[0].PostOffice
                    })
                },
                (err) => {
                    this.setState(
                        {
                            isLoaded: true,
                            error: err,
                        })
                }
            )

    }
    render() {
        const {isLoaded, postoffice, error } = this.state;
        if (error) {
            return (<div>Error Occoured</div>)
        }
        else if (isLoaded === false) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <div>
                    {
                        postoffice.map(x => (
                            <PostOfficeDetails key={x.Name} data={x}></PostOfficeDetails>
                        ))
                    } Ï
                </div >
            )

        }

    }
}

export default Details
