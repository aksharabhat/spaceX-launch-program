import React from 'react';
import Card from './card'
import Link from "next/link";
const axios = require('axios')

class filterCard extends React.Component {
    constructor() {
        super();
        this.state = {
            launchYear: null,
            launchSuccess: null,
            landSuccess: null,
            allResponse: [],
            launchData: [],
            landandlaunchData: [],
            cardDetails: [],
            loader: false
        }
    }
    handleLaunchYear = (event) => {
        this.setState({
            launchYear: event.target.innerText
        }, this.allResponse)

    }
    handleLaunch = (event) => {
        if (event.target.innerText === 'True')
            this.setState({
                launchSuccess: true
            }, this.handleLAunchSuccess)
        else {
            this.setState({
                launchSuccess: false
            }, this.handleLAunchSuccess)
        }
    }
    handleLanding = (event) => {
        if (event.target.innerText === 'True')
            this.setState({
                landSuccess: true
            }, this.allResponse)
        else {
            this.setState({
                landSuccess: false
            }, this.allResponse)
        }
    }

    handleLAunchSuccess = () => {
        axios.get('https://api.spaceXdata.com/v3/launches?limit=100', {
            params: {
                launch_success: this.state.launchSuccess,
            }
        }).then(response => {
            console.log("handleLAunchSuccess response", response.data)
            this.setState({
                launchData: response.data,
                landandlaunchData: [],
                cardDetails: []
            })
        }).catch(err => {
            console.log("Error in handleLAunchSuccess !!!!", err)
        })

    }
    allResponse = () => {
        console.log("allResponse called")
        if (this.state.landSuccess != null && this.state.launchSuccess != null && this.state.launchYear != null) {
            axios.get('https://api.spaceXdata.com/v3/launches?limit=100', {
                params: {
                    launch_success: this.state.launchSuccess,
                    land_success: this.state.landSuccess,
                    launch_year: this.state.launchYear
                }
            })
                .then(response => {
                    this.setState({
                        allResponse: response.data,
                        landandlaunchData: [],
                        launchData: [],
                        cardDetails: []
                    })
                })
                .catch(err => {
                    console.log("Error !!!!", err)
                })
        }
        else if (this.state.landSuccess != null && this.state.launchSuccess != null) {
            axios.get('https://api.spaceXdata.com/v3/launches?limit=100', {
                params: {
                    launch_success: this.state.launchSuccess,
                    land_success: this.state.landSuccess
                }
            })
                .then(response => {
                    console.log("Response in all response", response.data)
                    this.setState({
                        landandlaunchData: response.data,
                        cardDetails: []
                    })
                })
                .catch(err => {
                    console.log("Error !!!!", err)
                })
        }
    }
    componentDidMount = async () => {
        let result = await axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        this.setState({
            cardDetails: result.data
        })
    }
    render() {
        let launchYearButton = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
        let launchSuccessButton = ["True", "False"]
        let landSuccessButton = ["True", "False"]
        console.log("State in render", this.state.cardDetails)
        let firstTimeLoad = null
        if (this.state.cardDetails.length > 0) {
            firstTimeLoad = <Card className="card-component"
                clickedOn={"No Click"}
                cardDetails={this.state.cardDetails} />
        }
        let launchSuccess = null
        if (this.state.launchData.length > 0 && this.state.landandlaunchData.length === 0 && this.state.allResponse.length === 0) {
            launchSuccess =
                <Card
                    className="filtered-card-component"
                    clickedOn={"Launch Click"}
                    filteredCardLaunchDetails={this.state.launchData}
                >

                </Card>

        }
        let landSuccess = null
        if (this.state.landandlaunchData.length > 0 && this.state.launchData.length > 0 && this.state.allResponse.length === 0) {
            landSuccess = <Card
                className="filtered-card-component"
                clickedOn={"Land Click"}
                filteredCardLAndDetails={this.state.landandlaunchData}
            >
            </Card>
        }
        let allResponse = null
        if (this.state.allResponse.length > 0) {
            allResponse = <Card
                className="filtered-card-component"
                clickedOn={"All"}
                allDetails={this.state.allResponse}
            >
            </Card>
        }
        return (
            <div id="filter-card-main-page">
                <div id="spaceX-launch-programs-filter-options">
                    <div className="filtercard">
                        <div className="filter-card-header">
                            <p className="filer-name">Filters</p>
                        </div>

                        <div className="filter-options">
                            <p className="launch-year">Launch Year</p>
                            <hr></hr>
                            <div className="button-div">
                                {
                                    launchYearButton.map((button_name1) => {
                                        return (
                                            <button
                                                className="button_name1"
                                                onClick={this.handleLaunchYear}

                                            >
                                                <Link href={`/home?launch_year`} >
                                                    {button_name1}
                                                </Link>

                                            </button>
                                        )
                                    })
                                }
                            </div>

                            <p className="successful-launch">Successful Launch</p>
                            <hr></hr>
                            {
                                launchSuccessButton.map((launchButton_name) => {
                                    return (
                                        <button
                                            className="launchButton_name"
                                            onClick={this.handleLaunch}
                                        >
                                            <Link href={`/home?launch_success`} >
                                                {launchButton_name}
                                            </Link>

                                        </button>
                                    )
                                })
                            }
                            <p className="successful-land">Successful Landing</p>
                            <hr></hr>
                            {
                                landSuccessButton.map((landButton_name) => {
                                    return (
                                        <button
                                            className="landButton_name"
                                            onClick={this.handleLanding}
                                        >
                                            <Link href={`/home?land_success`} >
                                                {landButton_name}
                                            </Link>

                                        </button>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div id="spacex-launchSuccess-id">
                    <div className="filtered-launchsuccess-details">
                        {launchSuccess}
                    </div>
                </div>
                <div id="spacex-landSuccess-id">
                    <div className="filtered-landsuccess-details">
                        {landSuccess}
                    </div>
                </div>
                <div id="spacex-allResponse-id">
                    <div className="all-Response">
                        {allResponse}
                    </div>

                </div>
                <div id="card-page">
                    <div className="first-card-load">
                        {firstTimeLoad}
                    </div>
                </div>
            </div>
        )
    }

}
export default (filterCard);