import React, { Component } from 'react';
import DefaultLayout from './Default'

class Firstpage extends Component {

  render() {
    const Row = ({ children }) => {
      return (
        <div className="row">
          {children}
        </div>
      );
    }
    
    return (
      <DefaultLayout>
      </DefaultLayout>
    );
  }
}

export default Firstpage;
