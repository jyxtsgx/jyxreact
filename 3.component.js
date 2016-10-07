/**
 * Created by Administrator on 2016/10/7.
 */
var Message = React.createClass({
        render(){
        return <div><h1>hello</h1><h2>world</h2></div>

    }
    /**
     * 1.方面修改，，2方面精简代码，3有两个reactDOM也就渲染一个是整体覆盖
     */
});
ReactDOM.render(
    <Message />
  ,document.getElementById('app')
);
