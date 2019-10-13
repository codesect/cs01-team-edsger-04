import React from "react";

class SelectCountry extends React.Component {
  render() {
    let countries = this.props.countries;
    let optionItems = countries.map(item => (
      <option key={item.iso_code3}>{item.pik_name}</option>
    ));

    return (
      <div>
        <select>{optionItems}</select>
      </div>
    );
  }
}

export default SelectCountry;
