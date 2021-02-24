import React, { Fragment } from "react";
// import "../test.css";


import { queAction, queType } from "../actions/action";
import { connect } from "react-redux";

let selected;
class QueType extends React.Component {
  constructor(props) {
    super(props);

    this.getQueType = this.getQueType.bind(this);
  }
  getQueType(event) {

    console.log('this.props.formID', this.props.formID)
    selected = event.target.value;
    console.log(selected);

    let array = Object.keys(this.props.queHandler[this.props.formID]);
    array = array[array.length - 1];

    array = parseInt(array);

    let formQue = {
      type: selected,
      payload: {

        formID: this.props.formID,
        questionNo: array
      }
    }

    this.props.dispatchQueType(formQue);



    this.props.dispatchPreData({
      type: "preUpdate2",
      payload: {
        data: { question: "Question", options: { 0: "Option" } },
        formID: this.props.formID,
        questionNo: array + 1
      }
    })

  }
  render() {
    return (<Fragment>
      <div id="queTypeCont" className="queTypeCont">

        <button value="text" className="btn btn-primary shadow-none" onClick={this.getQueType} > Paragraph</button>
        <button value="radio" className="btn btn-primary shadow-none" onClick={this.getQueType}>Single Option</button>
        <button value="checkbox" className="btn btn-primary shadow-none" onClick={this.getQueType}>Multiple Option</button>
        <button value="email" className="btn btn-primary shadow-none" onClick={this.getQueType}>Email</button>
        <button value="tel" className="btn btn-primary shadow-none" onClick={this.getQueType}> Phone No.</button>

      </div>

      <div className="anotherQueTypeCont"> <button value="text" className="btn btn-primary shadow-none" onClick={this.getQueType} >&#x271A; &nbsp; Add</button></div>

      </Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    queHandler: state.queHandler
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    dispatchQueType: (para) => dispatch(queType(para)),
    dispatchPreData: (para) => dispatch(queAction(para))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(QueType);
