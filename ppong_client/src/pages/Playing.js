import React, { Component } from 'react';
import DefaultLayout from './Default';
import { DelayInput } from 'react-delay-input';
import {
  Button,
  Form,
  FormGroup,
  Col
} from 'reactstrap';

class Playpage extends Component {
  state = {
    ing0: '', ing1: '', ing2: '', ing3: '', ing4: '', ing5: '', ing6: '', ing7: '', ing8: '', ing9: '',
    jaeki0: '', jaeki1: '', jaeki2: '', jaeki3: '', jaeki4: '', jaeki5: '', jaeki6: '', jaeki7: '', jaeki8: '', jaeki9: '',
    woni0: '', woni1: '', woni2: '', woni3: '', woni4: '', woni5: '', woni6: '', woni7: '', woni8: '', woni9: '',
    huni0: '', huni1: '', huni2: '', huni3: '', huni4: '', huni5: '', huni6: '', huni7: '', huni8: '', huni9: '',
    woong0: '', woong1: '', woong2: '', woong3: '', woong4: '', woong5: '', woong6: '', woong7: '', woong8: '', woong9: ''
  }

  state = {
    ing: [],
    jaeki: [],
    woni: [],
    huni: [],
    woong: []
  }

  state = {
    num: ''
  }

  mappingState() {
    this.state.ing = [
      this.state.ing0,
      this.state.ing1,
      this.state.ing2,
      this.state.ing3,
      this.state.ing4,
      this.state.ing5,
      this.state.ing6,
      this.state.ing7,
      this.state.ing8,
      this.state.ing9
    ]
    this.state.jaeki = [
      this.state.jaeki0,
      this.state.jaeki1,
      this.state.jaeki2,
      this.state.jaeki3,
      this.state.jaeki4,
      this.state.jaeki5,
      this.state.jaeki6,
      this.state.jaeki7,
      this.state.jaeki8,
      this.state.jaeki9
    ]
    this.state.woni = [
      this.state.woni0,
      this.state.woni1,
      this.state.woni2,
      this.state.woni3,
      this.state.woni4,
      this.state.woni5,
      this.state.woni6,
      this.state.woni7,
      this.state.woni8,
      this.state.woni9
    ]
    this.state.huni = [
      this.state.huni0,
      this.state.huni1,
      this.state.huni2,
      this.state.huni3,
      this.state.huni4,
      this.state.huni5,
      this.state.huni6,
      this.state.huni7,
      this.state.huni8,
      this.state.huni9
    ]
    this.state.woong = [
      this.state.woong0,
      this.state.woong1,
      this.state.woong2,
      this.state.woong3,
      this.state.woong4,
      this.state.woong5,
      this.state.woong6,
      this.state.woong7,
      this.state.woong8,
      this.state.woong9
    ]
  }

  player_num() {
    var res = fetch('http://13.209.195.119:88/score/player', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        num: this.state.num
      })
    });

    return res;
  }

  finish() {
    var res = fetch('http://13.209.195.119:88/score/finish', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ing: this.state.ing,
        jaeki: this.state.jaeki,
        woni: this.state.woni,
        huni: this.state.huni,
        woong: this.state.woong
      })
    });
  }

  finish_ing = () => {
    var scope = this;

    this.mappingState();
    this.player_num().then((res) => {
      scope.finish();
    });
  }

  render() {
    const Row = ({ children }) => {
      return (
        <div className="row">
          {children}
        </div>
      );
    }

    const InputScore = () => {
      return (
        <div>
          <Form>
            <Row form>
              <Col>
                <h5>명수</h5>
                <FormGroup>
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.num}
                    onChange = {(data) => {this.setState({num: data.target.value})}}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col>
                <h5>인근</h5>
                <FormGroup>
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing0}
                    onChange = {(data) => {this.setState({ing0: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing1}
                    onChange = {(data) => {this.setState({ing1: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing2}
                    onChange = {(data) => {this.setState({ing2: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing3}
                    onChange = {(data) => {this.setState({ing3: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing4}
                    onChange = {(data) => {this.setState({ing4: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing5}
                    onChange = {(data) => {this.setState({ing5: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing6}
                    onChange = {(data) => {this.setState({ing6: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing7}
                    onChange = {(data) => {this.setState({ing7: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing8}
                    onChange = {(data) => {this.setState({ing8: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.ing9}
                    onChange = {(data) => {this.setState({ing9: data.target.value})}}
                  />
                </FormGroup>
              </Col>
              <Col>
                <h5>재이</h5>
                <FormGroup>
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki0}
                    onChange = {(data) => {this.setState({jaeki0: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki1}
                    onChange = {(data) => {this.setState({jaeki1: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki2}
                    onChange = {(data) => {this.setState({jaeki2: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki3}
                    onChange = {(data) => {this.setState({jaeki3: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki4}
                    onChange = {(data) => {this.setState({jaeki4: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki5}
                    onChange = {(data) => {this.setState({jaeki5: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki6}
                    onChange = {(data) => {this.setState({jaeki6: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki7}
                    onChange = {(data) => {this.setState({jaeki7: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki8}
                    onChange = {(data) => {this.setState({jaeki8: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.jaeki9}
                    onChange = {(data) => {this.setState({jaeki9: data.target.value})}}
                  />
                </FormGroup>
              </Col>
              <Col>
                <h5>강원</h5>
                <FormGroup>
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni0}
                    onChange = {(data) => {this.setState({woni0: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni1}
                    onChange = {(data) => {this.setState({woni1: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni2}
                    onChange = {(data) => {this.setState({woni2: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni3}
                    onChange = {(data) => {this.setState({woni3: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni4}
                    onChange = {(data) => {this.setState({woni4: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni5}
                    onChange = {(data) => {this.setState({woni5: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni6}
                    onChange = {(data) => {this.setState({woni6: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni7}
                    onChange = {(data) => {this.setState({woni7: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni8}
                    onChange = {(data) => {this.setState({woni8: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woni9}
                    onChange = {(data) => {this.setState({woni9: data.target.value})}}
                  />
                </FormGroup>
              </Col>
              <Col>
                <h5>지훈</h5>
                <FormGroup>
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni0}
                    onChange = {(data) => {this.setState({huni0: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni1}
                    onChange = {(data) => {this.setState({huni1: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni2}
                    onChange = {(data) => {this.setState({huni2: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni3}
                    onChange = {(data) => {this.setState({huni3: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni4}
                    onChange = {(data) => {this.setState({huni4: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni5}
                    onChange = {(data) => {this.setState({huni5: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni6}
                    onChange = {(data) => {this.setState({huni6: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni7}
                    onChange = {(data) => {this.setState({huni7: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni8}
                    onChange = {(data) => {this.setState({huni8: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.huni9}
                    onChange = {(data) => {this.setState({huni9: data.target.value})}}
                  />
                </FormGroup>
              </Col>
              <Col>
                <h5>찬웅</h5>
                <FormGroup>
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong0}
                    onChange = {(data) => {this.setState({woong0: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong1}
                    onChange = {(data) => {this.setState({woong1: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong2}
                    onChange = {(data) => {this.setState({woong2: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong3}
                    onChange = {(data) => {this.setState({woong3: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong4}
                    onChange = {(data) => {this.setState({woong4: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong5}
                    onChange = {(data) => {this.setState({woong5: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong6}
                    onChange = {(data) => {this.setState({woong6: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong7}
                    onChange = {(data) => {this.setState({woong7: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong8}
                    onChange = {(data) => {this.setState({woong8: data.target.value})}}
                  />
                  <DelayInput
                    style = {{width: "100px"}}
                    minLength = {0}
                    delayTimeout = {1000}
                    value = {this.state.woong9}
                    onChange = {(data) => {this.setState({woong9: data.target.value})}}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <Button color="success"
          onClick={this.finish_ing}
          >Go</Button>
        </div>
      );
    }

    return (
      <DefaultLayout>
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Playing</h1>
            </div>
            <div>
              <InputScore />
            </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default Playpage;
