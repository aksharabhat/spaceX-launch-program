import React from 'react';


export default function ImgMediaCard(props) {
    let cardDetails = []
    if (props.clickedOn === 'Launch Click') {
        cardDetails = []
        cardDetails = props.filteredCardLaunchDetails
    }
    else if (props.clickedOn === 'Land Click') {
        cardDetails = []
        cardDetails = props.filteredCardLAndDetails
    }
    else if (props.clickedOn === 'All') {
        cardDetails = []
        cardDetails = props.allDetails
    }
    else {
        cardDetails = props.cardDetails
    }
    console.log("PROPS",  props.clickedOn)

    return (
        cardDetails.map((a) => {
            return (
                <div id="spaceX-launch-programs-filters">
                    <div className="card">
                        <div className="card-header">
                            <img src={a.links.mission_patch} alt="Avatar" className="image" />
                        </div>
                        <div className="card-info">
                            <p className="filter-name">{a.mission_name + "#" + a.flight_number}</p>
                            <div className="mission-ids-mainClass">
                                <p className="mission-id-header">Mission ID:</p>
                                <ul className="unordered-list-card-id">
                                    <li className="list-card-id">
                                        <p className="mission-id">{a.mission_id ? a.mission_id : Akshara}</p>
                                    </li>
                                </ul>
                                <p className="launch-year-header">Launch Year: {a.launch_year ? a.launch_year : "NA"}</p>
                                <p className="launch-success">Successfull Launch: {a.launch_success === true ? "True" : a.launch_success === false ? "False" : "NA"}</p>
                                <p className="land-success">Successfull Land: {a.land_success === true ? "True" : a.land_success === false ? "False" : "NA"}</p>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })

    );
}
