/**
 * Created by Administrator on 2016/10/6.
 */
var persons = ['张三','李四','王五'];

ReactDOM.render(
    <div>
        {
          persons.map(function(item,index,input){
              return <div key={index}>{item} </div>
          })
        }

      </div>
      ,document.getElementById('app')

);