import React, { Component } from 'react';
import DefaultLayout from './Default'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col
} from 'reactstrap';

class TextInput extends Component {
  state = {
    value: ''
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Input type="text" style={{width: "100px"}} value={ this.state.value } onChange={(event) => this.handleChange(event)} />
    );
  }
}

class Playpage extends Component {
  state = {
    ing: [],
    jaeki: [],
    woni: [],
    huni: [],
    woong: []
  }

  render() {
    const InputArrays = () => {
      return [
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />,
        <TextInput />
      ]
    }

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
                <h5>인근</h5>
                <FormGroup>
                  <InputArrays />
                </FormGroup>
              </Col>
              <Col>
                <h5>재이</h5>
                <FormGroup>
                  <InputArrays />
                </FormGroup>
              </Col>
              <Col>
                <h5>강원</h5>
                <FormGroup>
                  <InputArrays />
                </FormGroup>
              </Col>
              <Col>
                <h5>지훈</h5>
                <FormGroup>
                  <InputArrays />
                </FormGroup>
              </Col>
              <Col>
                <h5>찬웅</h5>
                <FormGroup>
                  <InputArrays />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <Button color="success" onClick={console.log(InputArrays)}>Go</Button>{''}
        </div>
      );
    }

    return (
      <DefaultLayout>
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Playing</h1>
            </div>
            <Row>
              <InputScore />
            </Row>
        </div>
      </DefaultLayout>
    );
  }
}

export default Playpage;
