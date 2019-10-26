import React from "react";

class SelectCountry extends React.Component {

  handleChange= (event) => {
    console.log("bhupesh ", event.target.value);
    const {sectorSelectedCallback} = this.props;
    sectorSelectedCallback(event.target.value);
  }

  render() {
    let dataSources = this.props.sectors;
    let optionItems = dataSources.map(item => (
      <option key={item.id}  value={item.id}>{item.name}</option>
    ));

    return (
      <div>
        <select onChange={this.handleChange}>{optionItems}</select>
      </div>
    );
  }
}

export default SelectCountry;
