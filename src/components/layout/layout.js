import React from 'react';
import {connect} from 'dva';
import Routes from '../../routes/all';

class Layout extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            current: 'index'
        }
    }
    handleClick(e){
        this.setState({
        });

    }
    render() {
      return (
          <div>
            <Routes/>
          </div>

      );
    }
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
