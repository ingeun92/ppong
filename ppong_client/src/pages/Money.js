import React, { Component } from 'react';
import DefaultLayout from './Default';
import { Button } from 'reactstrap';

class Moneypage extends Component {
  state = {
    money_ing: '',
    money_jaeki: '',
    money_woni: '',
    money_huni: '',
    money_woong: ''
  }

  async componentDidMount() {
    var res = await fetch('http://163.239.27.33:3200/score/money');
    var data = await res.json();
    this.setState({
      money_ing: data.ing,
      money_jaeki: data.jaeki,
      money_woni: data.woni,
      money_huni: data.huni,
      money_woong: data.woong
    })
  }

  endGame() {
    var res = fetch('http://163.239.27.33:3200/score/end', {
      method: 'get'
    });
  }

  render() {
    const Money_ing = () => {
      return(
        <div>
          <h5>인근: {this.state.money_ing}</h5>
        </div>
      );
    }

    const Money_jaeki = () => {
      return(
        <div>
          <h5>재이: {this.state.money_jaeki}</h5>
        </div>
      );
    }

    const Money_woni = () => {
      return(
        <div>
          <h5>강원: {this.state.money_woni}</h5>
        </div>
      );
    }

    const Money_huni = () => {
      return(
        <div>
          <h5>지훈: {this.state.money_huni}</h5>
        </div>
      );
    }

    const Money_woong = () => {
      return(
        <div>
          <h5>찬웅: {this.state.money_woong}</h5>
        </div>
      );
    }

    const Endgame = () => {
      return(
        <div>
          <Button color="success"
          onClick={this.endGame}
          >End</Button>
        </div>
      );
    }

    return (
      <DefaultLayout>
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Money</h1>
            </div>
            <div>
              <Money_ing />
              <Money_jaeki />
              <Money_woni />
              <Money_huni />
              <Money_woong />
            </div>
            <div>
              <Endgame />
            </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Moneypage;
