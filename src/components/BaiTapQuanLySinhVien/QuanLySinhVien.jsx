import React, { Component } from 'react'
import Form from './Form'
import Management from './Management'

export default class QuanLySinhVien extends Component {
  render() {
    return (
        <div className="w-75 mx-auto mt-5">
            <Form></Form>
            <Management></Management>
      </div>
    )
  }
}
