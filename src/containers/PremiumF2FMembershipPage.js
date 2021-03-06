import React, { Component } from 'react'
import CustomRingLoader from '../components/CustomRingLoader'
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

export default class PremiumF2FMobMembershipPage extends Component {
  state = { premiumF2FMobMembershipPage: null }
  componentDidMount () {
    axios.get('api/v1/static-pages/premiumf2f')
      .then(response => {
        this.setState({ premiumF2FMobMembershipPage: response.data })
      })
  }

  render () {
    let { premiumF2FMobMembershipPage } = this.state
    if (premiumF2FMobMembershipPage) {
      return (
        <Container>
          <div>
            { ReactHtmlParser(premiumF2FMobMembershipPage) }
          </div>
        </Container>
      )
    } else {
      return (
        <CustomRingLoader />
      )
    }
  }
}
