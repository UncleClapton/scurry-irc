// Module Imports
import React from 'react';





export default class Component extends React.Component {
  /***************************************************************************\
    Private Methods
  \***************************************************************************/

  _bindMethods (methods) {
    for (const method of methods) {
      this[method] = this[method].bind(this);
    }
  }
}
