import React, { Component } from "react";
import { connect } from "react-redux";


class Form extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    state = {
        values: {
            maSV: "",
            hoTen: "",
            soDienThoai: "",
            email: "",
        },
        errors: {
            maSV: "",
            hoTen: "",
            soDienThoai: "",
            email: "",
        },
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        });
    };

    handleSubmit = (event) => {
      event.preventDefault()
      event.target.reset()
      console.log(event.target)
        const isValid = event.target.checkValidity();
        
        if (!isValid) {
          return
        }

        if (this.props.selectedUser) {
          this.props.dispatch({
              type:"UPDATE_USER",
              payload: this.state.values,
          })
      } 
      else {
      
          this.props.dispatch({
              type: "ADD_USER",
              payload: this.state.values,
      })
      }
      }

    handleBlur = (event) => {
        let message = ""
        const {  validationMessage, name, validity, title, minLength, maxLength} = event.target 
        const {valueMissing, tooShort, tooLong, patternMismatch} = validity

        if (valueMissing) {
            message = `${title} is required`
        }

        if (tooShort || tooLong) {
            message = `${title} from ${minLength}-${maxLength} characters`
        }

        if (tooLong) {
            message = `${title} is too long`
        }

        if (patternMismatch) { 
            console.log(title==='Số điện thoại')
            if (title==='Số điện thoại') {
                message = `Please follow these patterns: 
                +919367788755
                8989829304
                +16308520397
                786-307-3615`
            }
            else {
                message = `${title} has invalid pattern`
            }

        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: message
            }
        })

    }

    handleReset = () => {
        this.setState({
            values: {
                maSV: "",
                hoTen: "",
                soDienThoai: "",
                email: "",
            },
        })
    }


    static getDerivedStateFromProps(nextProps, currentState) {


      if (nextProps.selectedUser && currentState.values.maSV !== nextProps.selectedUser.maSV)
      {
          currentState.values = nextProps.selectedUser;
      }

      return currentState
  }

    render() {
      const { maSV = "", hoTen="", soDienThoai="", email="" } = this.state.values || {};
        return (
            <div className="card p-0">
                <div className="card-header bg-dark text-white font-weight-bold">
                    REGISTER FORM
                </div>
                <div className="card-body">
                    <form
                        ref={this.formRef}

                        noValidate
                        onSubmit={this.handleSubmit}
                        onReset={this.handleReset}
                    >
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Mã SV</label>
                                    <input
                                    value={maSV}
                                    title = "Mã sinh viên"
                                        type="text"
                                        className="form-control"
                                        name="maSV"
                                        onChange={this.handleChange}
                                        required
                                        onBlur={this.handleBlur}
                                    />
                                    <span className="text-danger">{this.state.errors.maSV}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Họ tên</label>
                                    <input
                                    value={hoTen}
                                    title="Họ tên"
                                        type="text"
                                        className="form-control"
                                        name="hoTen"
                                        onChange={this.handleChange}
                                        required
                                        onBlur={this.handleBlur}
                                        pattern="^[a-zA-Z]+ [a-zA-Z]+$"
                                    />
                                    <span className="text-danger">{this.state.errors.hoTen}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input
                                    value={soDienThoai}
                                    title='Số điện thoại'
                                        type="text"
                                        className="form-control"
                                        name="soDienThoai"
                                        onChange={this.handleChange}
                                        required
                                        
                                        onBlur={this.handleBlur}
                                        
                                        pattern="^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$"
                                    />
                                    <span className="text-danger">{this.state.errors.soDienThoai}</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                    value={email}
                                    title='email'
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        onChange={this.handleChange}
                                        required
                                        onBlur={this.handleBlur}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    />
                                    <span className="text-danger">{this.state.errors.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                        <button disabled={!this.formRef.current?.checkValidity()} className="btn btn-success mr-2">
                            Thêm sinh viên
                        </button>
                        <button type="reset" className="btn btn-outline-dark">
                            RESET
                        </button>
                    </div>
                    </form>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    selectedUser: state.studentReducer.selectedUser
  }
}

export default connect(mapStateToProps)(Form)