import { Component } from "react";
import "./MapView.css";
import { Circle, LayerGroup, MapContainer, Marker, Popup,  TileLayer} from "react-leaflet";
import {Box,Grid, Paper} from "@material-ui/core";
import { spacing } from '@material-ui/system';
import HeatLayer from 'rc-leaflet-heat'
import { Residence } from "../../models/Residence";

interface Point {
    zipCode: string;
    number: string;
    latitude: number;
    longitude: number;
    residentsNo: number;  
}

interface MapViewState{
    points: Point[];
}

export class MapView extends Component<{},MapViewState>{

    constructor(props: any) {
        super(props);
        this.state = {
            points: new Array<Point>()
        }

        console.log(this.state.points)
    }

    greenOptions = { color: 'red', fillColor: 'red', border: false}

    readData(){
        console.log(this.state.points);

        fetch('http://localhost:8080/api/residence/getAll')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.map((element: Point, index: number) => {                   
                    console.log(element);
                    //res.push(element);
                });
            });

        //this.setState({points: res});
    }
    
    render() {
        return (
        <Box mt={5} onClick={this.readData}>
            <Grid
            container 
            justify="center">
                <Grid item xs={10}>
                    <Paper elevation={2}>
                         <MapContainer center={[44.4377, 26.0945]} zoom={12} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                {this.state.points.map((element, key) => 
                                    <Circle
                                    center={[element.latitude, element.longitude]}
                                    pathOptions={this.greenOptions}
                                    radius={500}
                                    stroke={false}
                                    />
                                )}
                            </LayerGroup>
                        </MapContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        );
    }
}