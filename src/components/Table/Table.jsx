import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPastExercisesData, loadSpecificExercisesIDwithAllScoresData } from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return { list: state.dashboard, user_info: state.loginReducer  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadSpecificExercisesIDwithAllScoresData }, dispatch);
};


class Table extends Component {
    renderList = (list) => (
      list.map((item, index) => (
        <tr onClick={()=> {
            this.props.loadSpecificExercisesIDwithAllScoresData(item.user_id, item.id);
        }}>
          <td> {index+1} </td>
          <td>{item.id}</td>
          <td>{item.notes_array}</td>
          <td>{item.created_at}</td>
        </tr>
      ))
    );

  render() {
    if (this.props.list.length === 0) {
      return (
        <div className="alert alert-info"> Table Will Show After You Click 'Check Past Exercises'</div>
      );
    }
    else{
      return (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>
                ID
                </th>
              <th>
                  Exercise ID
                </th>
              <th>
                  Note Array
                </th>
              <th>
                  Time Stamp
                  </th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(this.props.list)}
          </tbody>
        </table>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table);
