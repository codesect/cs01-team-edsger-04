import React from "react";

class SelectCountry extends React.Component {
     

  handleChange= (event) => {
    console.log("bhupesh ", event.target.value);
    const {countrySelectedCallback} = this.props;
    countrySelectedCallback(event.target.value);
  }

  render() {
    let countries = this.props.countries;
    let optionItems = countries.map(item => (
      <option key={item.iso_code3} value={item.iso_code3}>{item.pik_name}</option>
    ));

    return (
      <div>
        <select onChange={this.handleChange}>{optionItems}
        </select>
      </div>
    );
  }
}

export default SelectCountry;
