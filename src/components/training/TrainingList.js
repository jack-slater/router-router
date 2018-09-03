import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class _TrainingList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {list.map(num => {
                        return <li>
                            <Link to={`training/${num}`}>Training {num}</Link>
                            {this.props.trainingComplete.includes(num) && <p>Complete</p>}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    trainingComplete: state.trainingComplete,
});

export const TrainingList = connect(mapStateToProps)(_TrainingList);