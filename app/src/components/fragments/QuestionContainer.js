/* eslint-disable no-console */
import React, { Component } from 'react'

// UI-Components
import {
  FormGroup, FormControl,
  ControlLabel, ToggleButton, ToggleButtonGroup, Pager
} from 'react-bootstrap'

class QuestionContainer extends Component {
  render() {
    return (
      <span>
        <span>{this.props.qInfo.qText}</span>
        {!this.props.qInfo.isTextual ?
          <ToggleButtonGroup type="radio"
            name="qRadio"
            value={this.props.qInfo.chosenAnswer}
            onChange={this.props.handleAnswerClick}>
            {this.props.qInfo.answers.map((ans) => {
              console.log('ans.id:' + ans.id)
              return (
                <ToggleButton value={ans.id}>
                  {ans.text === '' ? ans.id : ans.text}
                </ToggleButton>
              )
            })
            }
          </ToggleButtonGroup>
          :
          <FormGroup controlId="formControlsTextarea"
            validationState={this.props.handleValidationState()}>
            <ControlLabel>Give your opinion</ControlLabel>
            <FormControl componentClass="textarea"
              value={this.props.qInfo.chosenAnswer}
              placeholder="Max. 128 characters"
              onChange={this.props.handleAnswerTextual} />
          </FormGroup>
        }

        <Pager>
          <Pager.Item disabled={this.props.qInfo.isFirst ? true : false}
            onSelect={k => this.props.handlePagerClick(k)}
            eventKey={'prev'}>Previous</Pager.Item>
          <Pager.Item disabled={this.props.qInfo.isLast ? true : false}
            onSelect={k => this.props.handlePagerClick(k)}
            eventKey={'next'}>Next</Pager.Item>
        </Pager>
      </span>
    )
  }
}

export default QuestionContainer
