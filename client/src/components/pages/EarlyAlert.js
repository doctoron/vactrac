import React from 'react'

const EarlyAlert = () => {
  return (
    <div>
      <h1 className="text-center py-3">Coronavirus Situation, Updates & Map</h1>
      <ul className="card bg-light">
        <li className="p-1 py-1">
          <a href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">WHO: Novel Coronavirus (COVID-19) International Situation</h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="https://lcgis.maps.arcgis.com/apps/opsdashboard/index.html#/afd94ce1e24746229bdd75e4418aaa19" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">USA  Impact: Florida Situation & Map </h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="https://early-alert.maps.arcgis.com/apps/opsdashboard/index.html#/20bfbf89c8e74c0494c90b1ae0fa7b78" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">Coronavirus: Common Operational Picture </h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">CDC: Coronavirus Disease 2019 (COVID-19)</h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">WHO: Coronavirus disease (COVID-19) Outbreak</h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">US State Department: Travel Advisories</h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="https://www2.cdc.gov/nip/adultimmsched/" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">What Vaccines Do YOU Need? Take the CDC Quiz</h3></a>
        </li>
        <li className="p-1 py-1">
          <a href="http://apps.who.int/worldimmunizationweek/" target="_blank" rel="noopener noreferrer"><h3 className="text-left text-primary">WHO Knows What Works</h3></a>
        </li>
      </ul>
    </div >
  )
}
export default EarlyAlert;