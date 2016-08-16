import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.css';
import './styles/materialdesignicons.min.css';
import './styles/font-awesome.css';
import './icon100x100.png';

var TodoHeader = React.createClass({
  getInitialState: function(){
    var times = Date();
    times = times.slice(15);
    times = times.slice(0,9);
    return{
      times: times,
    }
  },
  render: function() {
    var time = Date();
    time = time.slice(0,15);
    return(
      <div>
          <h3 className="head"><i className="fa fa-slack"></i> slack</h3>
          <h6 className="text-center"><b>{time}</b></h6>
          <hr/>
      </div>
    );
  }
});

var Welcome = React.createClass({
  getInitialState: function(){
    var times = Date();
    times = times.slice(15);
    times = times.slice(0,9);
    return{
      times: times,
    }
  },
  render: function() {
    var time = Date();
    time = time.slice(0,15);
    return(
      <div>
          <h4 className="welcome text-center">Welcome to <i className="fa fa-slack"></i> slack</h4>
          <h6 className="text-center"><i>Your conversation with Slackbot begins here</i></h6>
          <hr/>
      </div>
    );
  }
});

var Input = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(e.target.value);
    var input = ReactDOM.findDOMNode(this.refs.in)
    this.props.addTodo(input.value);
    input.value="";
  },
  render: function() {
    return(
      <div className="margin-top">
      <div className="col-xs-11">
      <form onSubmit={this.handleSubmit}>
          <input className="inputs" ref="in" placeholder="Enter message"/>
      </form>
      </div>
      <div className="col-xs-1">
        <button className="red" onClick={this.handleSubmit}><i className="fa fa-send"></i></button>
      </div>
      </div>
    );
  }
});

var ChatItem = React.createClass({
  render: function() {
    return(
        <div className="item">
          <div className="col-md-12">
            <img className="pull-left" src="./src/icon100x100.png" width="40"/>
            <p className="p pull-left"><b>JohnDamilola: </b> {this.props.text}</p>
            <button className="red pull-right" onClick={this.handleSubmit}><i className="fa fa-trash"></i></button>
          </div>
        </div>
    );
  }
});

var Main = React.createClass({
  getInitialState: function(){
    return {
      chatItem: [],
      time: [],
    }
  },
  getNowState: function(){
    return {
      chatItem: this.state.chatItem,
      time: this.state.time,
    }
  },
  addTodo: function(item){
    var timed = Date();
    this.setState({
      chatItem: this.state.chatItem.concat(item),
    });
    this.setState({
      time: this.state.time.concat(timed)
    });
  },
  render: function(){
    var chatItem = this.state.chatItem;
    var chats = chatItem.map(function(chat) {
      return (<ChatItem text={chat} />)
    });

    return(
      <div className="col-md-offset-4 col-md-4 me">
        <div>
        <TodoHeader />
        <Welcome />
        <div className="inner">
          {chats}
        </div>
        <Input addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));
