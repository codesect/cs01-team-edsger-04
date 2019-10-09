import React from "react";

class SelectCountry extends React.Component {
  render() {
    let dataSources = this.props.gases;
    let optionItems = dataSources.map(item => (
      <option key={item.id}>{item.name}</option>
    ));

    return (
      <div>
        <select>{optionItems}</select>
      </div>
    );
  }
}

export default SelectCountry;
