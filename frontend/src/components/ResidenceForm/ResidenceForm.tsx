import { Button, TextField } from "@material-ui/core";
import { Component } from "react";
import { Residence } from '../../models/Residence';

interface ResidenceFormState{
    residence: Residence,
    isFormValid: boolean,
    zipCodeError: boolean,
    numberError: boolean,
    latitudeError: boolean,
    longitudeError: boolean,
    residentsError: boolean,
}

export class ResidenceForm extends Component<{},ResidenceFormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            residence: {
                zipCode: "",
                number: "",
                latitude: 0,
                longitude: 0,
                residentsNo: 1,
            },
            isFormValid: false,
            zipCodeError: true,
            numberError: true,
            latitudeError: false,
            longitudeError: false,
            residentsError: false,
        }
    }

    validateFields(){
        let formValid = true;

        if(this.state.residence.zipCode.length < 5){
            this.setState({zipCodeError: true});
            formValid = false;
        }else{
            this.setState({zipCodeError: false});            
        }

        if(this.state.residence.number.length < 5){
            this.setState({numberError: true});
            formValid = false;
        }else{
            this.setState({numberError: false});
        }

        if(this.state.residence.latitude <= 90 && this.state.residence.latitude >= -90 && typeof 1){
            this.setState({latitudeError: false});
        }else{
            this.setState({latitudeError: true});
            formValid = false;
        }

        if(this.state.residence.longitude <= 180 && this.state.residence.longitude >= -180 && typeof 1){
            this.setState({longitudeError: false});
        }else{
            this.setState({longitudeError: true});
            formValid = false;
        }

        if(isNaN(this.state.residence.residentsNo)){
            this.setState({residentsError: true});
            formValid = false;
        }else{
            this.setState({residentsError: false});
        }

            this.setState({isFormValid: formValid})
    }

    handleChange = (event: any) => {
        event.preventDefault();

        let residence = this.state.residence;
        let name = event.target.name;
        let value = event.target.value;

        switch(name){
            case "zipCode": residence.zipCode = value; break;
            case "number": residence.number = value; break;
            case "latitude": residence.latitude = value; break;
            case "longitude": residence.longitude = value; break;
            case "residentsNo": residence.residentsNo = value; break;

        }
        this.setState({residence})

        this.validateFields();
    }

    handleSubmit = (event: any) => {
        alert('A form was submitted: ' + JSON.stringify(this.state.residence));
    
        fetch('http://localhost:8080/api/residence/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state.residence)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField 
                    error={this.state.zipCodeError}
                    required
                    value={this.state.residence.zipCode} 
                    name="zipCode" 
                    label="Zip Code" 
                    onChange={this.handleChange} />
                <TextField 
                    error={this.state.numberError}
                    value={this.state.residence.number} 
                    name="number" 
                    label="Number" 
                    onChange={this.handleChange} />
                <TextField 
                    error={this.state.latitudeError}
                    value={this.state.residence.latitude} 
                    name="latitude" 
                    label="Latitude" 
                    onChange={this.handleChange} />
                <TextField
                    error={this.state.longitudeError} 
                    value={this.state.residence.longitude} 
                    name="longitude" 
                    label="Longitude" 
                    onChange={this.handleChange} />
                <TextField 
                    error={this.state.residentsError}
                    value={this.state.residence.residentsNo} 
                    name="residentsNo" 
                    label="Residents No." 
                    onChange={this.handleChange} />
                <Button 
                    disabled={!this.state.isFormValid}
                    type="submit">Submit</Button>
          </form>
        );
    }
}