import React from "react";
import SelectCountry from "./components/SelectCountry";
import SelectDataSource from "./components/SelectDataSource";
import SelectGases from "./components/SelectGases";
import SelectSectors from "./components/SelectSectors";
import { connect } from "react-redux";
import { fetchCountries } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      dataSources: [],
      gases: [],
      sectors: []
    };
  }

  componentDidMount() {
    this.props.fetchCountries();
    let initialList = [];

    /*   
    Below part I am handling using redux. same thing we need to do for other API
 */

    /*   
     fetch("https://www.climatewatchdata.org/api/v1/locations/countries")
      .then(response => {
        return response.json();
      })
      .then(data => {
        initialList = data.map(item => {
          return item;
        });
        console.log(initialList);
        this.setState({
          countries: initialList
        });
      }); */

    fetch(
      "https://www.climatewatchdata.org/api/v1/data/historical_emissions/data_sources"
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(initialList);
        this.setState({
          dataSources: response.data
        });
      });

    fetch(
      "https://www.climatewatchdata.org/api/v1/data/historical_emissions/gases"
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(initialList);
        this.setState({
          gases: response.data
        });
      });

    fetch(
      "https://www.climatewatchdata.org/api/v1/data/historical_emissions/sectors"
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(initialList);
        this.setState({
          sectors: response.data
        });
      });
  }
  render() {
    const { countries } = this.props;
    const { dataSources, gases, sectors } = this.state;
    if (
      countries.length === 0 ||
      dataSources.length === 0 ||
      gases.length === 0 ||
      sectors.length === 0
    ) {
      return null;
    }

    return (
      <div>
        <label> Country </label>
        <SelectCountry countries={countries} />
        <label> Data Source </label>
        <SelectDataSource dataSources={dataSources} />
        <label> Gas </label>
        <SelectGases gases={gases} />
        <label> Sector </label>
        <SelectSectors sectors={sectors} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { countries: state.climateData.countries };
};
export default connect(
  mapStateToProps,
  { fetchCountries }
)(App);
