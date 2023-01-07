import React, { Component } from "react";
import { connect } from "react-redux";

class Management extends Component {

    state = {
        keyword: ""
      }
      

    setSelectedUser = (user) => {
        this.props.dispatch({
            type: "SET_SELECTED_USER",
            payload: user
        })
    }

    deleteUser = (user) => {
        this.props.dispatch({
          type: "DELETE_USER",
          payload: user
        })
      }

    renderContent = () => {
        const filteredData = this.props.userList.filter((ele) => {
            console.log(ele)
            return (
                ele.hoTen
                    .toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) !== -1
            );
        });

        return filteredData.map((element, idx) => {
            return (
                <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-light" : undefined}
                >
                    <td>{element.maSV}</td>
                    <td>{element.hoTen}</td>
                    <td>{element.soDienThoai}</td>
                    <td>{element.email}</td>
                    <td>
                        <button
                            onClick={() => this.setSelectedUser(element)}
                            className="btn btn-info mr-2"
                        >
                            EDIT
                        </button>
                        <button
                            onClick={() => this.deleteUser(element)}
                            className="btn btn-danger"
                        >
                            DELETE
                        </button>
                    </td>
                </tr>
            );
        });
    };

    render() {
        return (
            <div className="card p-0 mt-3">
                <div className="card-header font-weight-bold">
                    USER MANAGEMENT
                </div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Search by full name..."
                                className="form-control"
                                onChange={(event) => this.setState({keyword: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã Sinh Viên</th>
                                <th>Họ tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderContent()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      userList: state.studentReducer.userList,
    };
  };


export default connect(mapStateToProps)(Management)
