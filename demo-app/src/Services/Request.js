import React, {Component} from "react";

const Request = {
    //render() {
        //return (
            /*<form onSubmit={this.props.myMethod}>
                <button>button</button>
            </form>*/
    getStudents() {
        return fetch("http://localhost:8080/student/show_all").then(res => res.json);
    }
        //);
    //}
};
export default Request