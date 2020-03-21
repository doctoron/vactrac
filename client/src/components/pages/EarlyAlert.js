import React, { Fragment } from 'react';
import { Card, Nav, NavItem, NavLink } from 'reactstrap';

const EarlyAlert = () => {
  return (
    <Fragment>
      <h1 className="text-center py-3">Covid19 Updates</h1>
      {/* <ul className="card resource"> */}

      <Nav>
        <NavItem>
          <Card color="warning" size="lg">
            <NavLink href=
              "https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd" target="_blank"
              rel="noopener noreferrer"
            >
              <h3>WHO Novel Coronavirus: (COVID-19) International Situation</h3>
            </NavLink>
          </Card>
        </NavItem>

        <NavItem>
          <Card color="warning" size="lg" >
            <NavLink href=
              "https://www.cdc.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>CDC: Coronavirus Disease 2019 (COVID-19)</h3>
            </NavLink>
          </Card>
        </NavItem>
        <NavItem>
          <Card color="warning" size="lg" >
            <NavLink href=
              "https://www.who.int/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>WHO: Coronavirus Disease (COVID-19) Outbreak</h3>
            </NavLink>
          </Card>
        </NavItem>
        <NavItem>
          <Card color="warning" size="lg" >
            <NavLink href=
              "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>US State Department: Travel Advisories</h3>
            </NavLink>
          </Card>
        </NavItem>

        <NavItem>
          <Card color="warning" size="lg" >
            <NavLink href=
              "http://apps.who.int/worldimmunizationweek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>What Vaccines <em> Do You</em> Need? Take the CDC Quiz</h3>
            </NavLink>
          </Card>
        </NavItem>
        <br />
      </Nav>
    </Fragment>
  )
}

export default EarlyAlert;