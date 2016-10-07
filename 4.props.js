/**
 * Created by Administrator on 2016/10/7.
 */
var Person =React.createClass({
    render(){
        return <div>
            {this.props.name}
            {this.props.sex}

        </div>
    }


});
ReactDOM.render(
    <Person  name="张三" sex="男" />
  ,document.getElementById('app')
);