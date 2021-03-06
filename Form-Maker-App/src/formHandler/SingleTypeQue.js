import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { queAction } from "../actions/action.js";



let  opId, options, noOfOps = 1;
class SingleTypeQue extends React.Component {
    constructor(props) {
        super(props)
        this.handleQueInfo = this.handleQueInfo.bind(this);
        this.handleOptionInfo = this.handleOptionInfo.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    handleQueInfo(event) {

        let question = event.target.value;


        // let question = "Question";

        let queInfo = {
            type: "single",

            payload: {
                data: {

                    options: this.props.queHandler[this.props.formID][this.props.queNo].options,

                    question,
                },

                formID: this.props.formID,
                questionNo: this.props.queNo,


            }

        }
        this.props.dispatchQueInfo(queInfo);




    }

    handleOptionInfo(event) {
        let optionsObj = this.props.queHandler[this.props.formID][this.props.queNo].options;
        let optionsKey = Object.keys(optionsObj);
        let question= this.props.queHandler[this.props.formID][this.props.queNo].question;


        optionsObj[event.target.id] = event.target.value;


        let optionInfo = {
            type: "single",

            payload: {
                data: {

                    options: optionsObj,

                    question,
                },

                formID: this.props.formID,
                questionNo: this.props.queNo,


            }


        }
        this.props.dispatchQueInfo(optionInfo);
    }

    addOption() {
        let optionsObj = this.props.queHandler[this.props.formID][this.props.queNo].options;
        let question = this.props.queHandler[this.props.formID][this.props.queNo].question;

        let optionsKey = Object.keys(optionsObj);
        optionsKey = parseInt(optionsKey[optionsKey.length - 1])





        let optionInfo = {
            type: "single",

            payload: {
                data: {

                    options: { [optionsKey + 1]: "Option" },

                    question,
                },

                formID: this.props.formID,
                questionNo: this.props.queNo,


            }


        }
        this.props.dispatchQueInfo(optionInfo);

    }

    removeOption(event) {
        let optionsObj = this.props.queHandler[this.props.formID][this.props.queNo].options;
        let question = this.props.queHandler[this.props.formID][this.props.queNo].question;

        let optionsKey = Object.keys(optionsObj);

        if (optionsKey.length !== 1) {

            delete optionsObj[event.target.id];

            let optionInfo = {
                type: "single",

                payload: {
                    data: {

                        options: optionsObj,

                        question,
                    },

                    formID: this.props.formID,
                    questionNo: this.props.queNo,


                }


            }
            this.props.dispatchQueInfo(optionInfo);
        }




    }
    render() {

        let optionsObj = this.props.queHandler[this.props.formID][this.props.queNo].options;
        let optionsKey = Object.keys(optionsObj);


        options = optionsKey.map((data, index) => {
            return <Fragment>


                <div class="form-check optionsCont" key={data} id={data}>
                    <input class="form-check-input optionsIcon" type="radio" name="flexRadioDefault" />

                    <input type="text" className="optionInput" defaultValue={optionsObj[data]} id={data} onChange={this.handleOptionInfo}></input> <button onClick={this.removeOption} id={data} class="btn shadow-none optionCancelBtn ">&#x2715;</button>

                </div>


                {/* <input type="radio" name="option" ></input> */}

            </Fragment>


        })
        let queData = this.props.queHandler[this.props.formID][this.props.queNo];

        return (<Fragment>
            <div className="questionCont">Q. <input type="text" className="queInput" name='question' onChange={this.handleQueInfo} defaultValue={queData.question}></input>
            </div>


            {options}
            <button onClick={this.addOption} class="btn btn-primary shadow-none addOption">Add Option</button>
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

        dispatchQueInfo: (para) => dispatch(queAction(para))

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SingleTypeQue);



