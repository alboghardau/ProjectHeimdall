import { Component } from "react";
import "./MapView.css";
import { Circle, LayerGroup, MapContainer, Marker, Popup,  TileLayer} from "react-leaflet";
import {Box,Grid, Paper} from "@material-ui/core";
import { spacing } from '@material-ui/system';
import HeatLayer from 'rc-leaflet-heat'
import { Residence } from "../../models/Residence";

interface MapViewState{
    points: Residence[];
}

export class MapView extends Component<{},MapViewState>{

    constructor(props: any) {
        super(props);
        this.state = {
            points: new Array<Residence>()
        }

        this.readData("");
    }

    greenOptions = { color: 'red', fillColor: 'red', border: false}

    readData = (event: any) => {
        this.setState({points: []});

        fetch('http://localhost:8080/api/residence/getAll')
            .then(response => response.json())
            .then(data => {
                data.map((element: Residence, index: number) => {
                    
                    this.setState((state, props) => ({
                        points: [... state.points.slice(), element]
                      }));
                });
            });
        console.log(this.state.points);
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
                                {this.state.points.map((element) => 
                                    <Circle
                                    center={[element.latitude, element.longitude]}
                                    pathOptions={this.greenOptions}
                                    radius={element.residentsNo * 100}
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