import React, { Component } from "react";

const withToDecimalConverter = (WrappedComponent) => {
  return class extends Component {
    toDecimalIfExist = (measure) => {
      let c = measure.split(" ");
      if (c.length < 2) return parseInt(measure);
      else {
        let unit = c[c.length - 1];
        let val = c.slice(0, c.length - 1).reduce((acc, item) => {
          let s = item.split("/");
          if (s.length === 1) {
            console.log(acc + parseInt(s[0]));
            return acc + parseInt(s[0]);
          } else return acc + parseInt(s[0]) / parseInt(s[1]);
        }, 0);
        return { qty: val.toFixed(2), unit };
      }
    };

    stringToDecimalString = (string) => {
      let s = string.split;
      if (s.length < 2) return string;
      else return (parseInt(s[0]) / parseInt(s[1])).toFixed(2).toString();
    };

    render() {
      return (
        <WrappedComponent
          Converter={this.toDecimalIfExist}
          stringToDecimal={this.stringToDecimalString}
          {...this.props}
        />
      );
    }
  };
};

export default withToDecimalConverter;
