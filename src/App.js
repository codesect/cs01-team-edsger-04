import React from "react";
import SelectCountry from "./components/SelectCountry";
import SelectDataSource from "./components/SelectDataSource";
import SelectGases from "./components/SelectGases";
import SelectSectors from "./components/SelectSectors";
import { connect } from "react-redux";
import { fetchCountries } from "./actions";
import LineChart from "./components/charts/LineChart";


const WIDTH = 960;
const HEIGHT = 500;

const MARGIN = {
  top: 50,
  right: 20,
  bottom: 20,
  left: 35,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      dataSources: [],
      gases: [],
      sectors: [],
      countrySelected:"AFG",
      dataSourceSelected: 42,
      gasSelected: 177,
      sectorSelected: 508,
      data:""
    }; 
    this.countrySelectedCallback = this.countrySelectedCallback.bind(this);
    this.dataSourceSelectedCallback = this.dataSourceSelectedCallback.bind(this);
    this.gasSelectedCallback = this.gasSelectedCallback.bind(this);
    this.sectorSelectedCallback = this.sectorSelectedCallback.bind(this);

  }
  countrySelectedCallback(value){
    console.log(value);
    this.setState({countrySelected:value });
  }

  dataSourceSelectedCallback(value){
    console.log(value);
    this.setState({dataSourceSelected:value });
  }
  gasSelectedCallback(value){
    console.log(value);
    this.setState({gasSelected:value });
  }
  sectorSelectedCallback(value){
    console.log(value);
    this.setState({sectorSelected:value });
  }

  componentDidMount() {
    this.props.fetchCountries();
    let initialList = [];


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

    // data for graph
    fetch(
      "https://www.climatewatchdata.org/api/v1/emissions?gas="+this.state.gasSelected+"&location="+this.state.countrySelected+"&sector="+this.state.sectorSelected+"&source="+this.state.dataSourceSelected
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response[0].emissions);
        this.setState({
          data: response[0].emissions
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
        <SelectCountry countries={countries} countrySelectedCallback = {this.countrySelectedCallback} />
        <label> Data Source </label>
        <SelectDataSource dataSources={dataSources} dataSourceSelectedCallback = {this.dataSourceSelectedCallback} />
        <label> Gas </label>
        <SelectGases gases={gases} gasSelectedCallback = {this.gasSelectedCallback} />
        <label> Sector </label>
        <SelectSectors sectors={sectors} sectorSelectedCallback = {this.sectorSelectedCallback } />
        <LineChart
          width={WIDTH}
          height={HEIGHT}
          margin={MARGIN}
          data={this.state.data}
        />
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

