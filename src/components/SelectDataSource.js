import React from "react";

class SelectCountry extends React.Component {

  handleChange= (event) => {
    console.log("bhupesh ", event.target.value);
    const {dataSourceSelectedCallback} = this.props;
    dataSourceSelectedCallback(event.target.value);
  }

  render() {
    let dataSources = this.props.dataSources;
    let optionItems = dataSources.map(item => (
      <option key={item.id} value={item.id}>{item.display_name}</option>
    ));

    return (
      <div>
        <select onChange={this.handleChange}>{optionItems}</select>
      </div>
    );
  }
}

export default SelectCountry;
