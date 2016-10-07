/**
 * Created by Administrator on 2016/10/7.
 */
var Person = React.createClass({
    //获取初始状态
    getInitialState(){
      return {happy:true};
    },
    handleClick(){
       this.setState({happy:!this.state.happy});

    },
    render(){
        var heart = this.state.happy?'高兴':'难过';
        return <div>
            {this.props.name}{heart}
    <button onClick={this.handleClick}>变心</button>
        </div>

    }

});
ReactDOM.render(
  <Person name="张三" > </Person>
    ,document.getElementById('app')
);
