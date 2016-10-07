/**
 * Created by Administrator on 2016/10/7.
 */
    var style ={
    color:'red'
}

var Person =React.createClass({
    render(){
        return <div className="bg" style={style}>
            {this.props.name}
            {this.props.sex}

        </div>
    }


});
ReactDOM.render(
    <div>
        <Person  name="张三" sex="男" />
        <Person  name="李四" sex="女" />
        <Person  name="王五" sex="男" />
    </div>
  ,document.getElementById('app')
);