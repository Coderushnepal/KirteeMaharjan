import React, { Component } from "react";

const withNutritionConvertor = (WrappedComponent) => {
  return class extends Component {
    Converter = (initialGrams, changedGrams, initialValues) => {
      let conversionFactor = changedGrams / initialGrams;
      let keys = Object.keys(initialValues);
      let value = keys.reduce((acc, key) => {
        let temp = acc;
        if (!initialValues.key) acc[key] = initialValues[key];
        else temp[key] = initialValues[key] * conversionFactor;
        return temp;
      }, {});
      return value;
    };

    render() {
      return <WrappedComponent Converter={this.Converter} {...this.props} />;
    }
  };
};

export default withNutritionConvertor;
