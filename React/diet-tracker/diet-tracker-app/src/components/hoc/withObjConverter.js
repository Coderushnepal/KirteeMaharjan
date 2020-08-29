import React, { Component } from "react";

const withObjConverter = (WrappedComponent) => {
  return class extends Component {
    Converter = (arrayOfObj) => {
      try {
        return arrayOfObj.reduce((acc, item) => {
          let key = !!item.title ? item.title.split(" ")[0] : null;
          return {
            ...acc,
            [key]: item,
          };
        }, {});
      } catch (err) {
        console.log(err);
        return {};
      }
    };

    render() {
      return <WrappedComponent Converter={this.Converter} {...this.props} />;
    }
  };
};

export default withObjConverter;
