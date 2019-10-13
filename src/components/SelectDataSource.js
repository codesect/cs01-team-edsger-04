import React from "react";

class SelectCountry extends React.Component {
  render() {
    let dataSources = this.props.dataSources;
    let optionItems = dataSources.map(item => (
      <option key={item.id}>{item.display_name}</option>
    ));

    return (
      <div>
        <select>{optionItems}</select>
      </div>
    );
  }
}

export default SelectCountry;
