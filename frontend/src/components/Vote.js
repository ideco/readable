import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getVotes, makeGetVote} from "../selectors";
import {Button, Icon} from 'semantic-ui-react'

class Vote extends Component {
    render() {
        const {voteScore, upVote, downVote} = this.props;
        const loading = voteScore.loading;
        return (
            <Button.Group>
                <Button disabled={loading} icon positive onClick={() => upVote(voteScore.id)}>
                    <Icon name='chevron circle up'/>
                </Button>
                <Button.Or text={loading ? '...' : voteScore.voteScore}/>
                <Button disabled={loading} icon negative onClick={() => downVote(voteScore.id)}>
                    <Icon name='chevron circle down'/>
                </Button>
            </Button.Group>
        );
    }
}

function makeMapStateToProps() {
    const getVotes = makeGetVote();
    const mapStateToProps = (state, props) => {
        return {
            voteScore: getVotes(state, props.id),
            upVote: props.upVote,
            downVote: props.downVote
        };
    };
    return mapStateToProps
}

export default connect(makeMapStateToProps)(Vote);
