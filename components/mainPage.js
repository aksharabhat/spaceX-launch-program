import Link from 'next/link'
import Card from './card'
import FilterPage from './filterCard'
import Layout from '../components/Layout'
const axios = require('axios')
class mainPage extends React.Component {

    state = {
        cardDetails: []
    }
    
    render() {
        console.log("Value",this.state.cardDetails)
        return (
            <Layout>
                {/* <div id="main-page"> */}
                    <FilterPage />
                {/* </div> */}
                
            </Layout >



        )



    }

}
export default (mainPage);