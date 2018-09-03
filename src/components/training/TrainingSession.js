import React from "react";
import {completeSession} from "../../redux/reducer";
import {connect} from "react-redux";
import YouTube from 'react-youtube';
import {Link} from "react-router-dom";

class _TrainingSession extends React.Component {

    completeSessionAndReturn = () => {
        const number = +this.props.match.params.number;
        this.props.completeSession(number);
        this.props.history.push(`/training/${number + 1}`);
    };

    renderContent(number) {
        const sessionComplete = this.props.trainingComplete.includes(number);
        const prevSessionComplete = this.props.trainingComplete.includes(number - 1);

        if (!prevSessionComplete && number !== 1) {
            return (<div>
                <h3>Please complete the previous session first</h3>
            </div>)
        } else {
            return (
                <div>
                    <p>Training content, lots of training content which changes for training things</p>
                    {number % 4 === 0 && <YouTube videoId={"hY7m5jjJ9mM"}/>}
                    {!sessionComplete && <button onClick={this.completeSessionAndReturn}>Mark Complete</button>}
                    {sessionComplete && <Link to={`/training/${number + 1}`}>Next Session</Link>}
                </div>
            )
        }

    }

    render() {
        const number = +this.props.match.params.number;
        return (
            <div>
                <h1>This is Training Session {number}</h1>
                {this.renderContent(number)}
                {number > 1 && <Link to={`/training/${number - 1}`}>Previous Session</Link>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trainingComplete: state.trainingComplete,
});

const mapDispatchToProps = dispatch => ({
    completeSession: (number) => dispatch(completeSession(number)),
});

export const TrainingSession = connect(mapStateToProps, mapDispatchToProps)(_TrainingSession);
