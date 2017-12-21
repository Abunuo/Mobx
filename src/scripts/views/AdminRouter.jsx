import React from 'react';
import DevTools from 'mobx-react-devtools';
import { observer, inject } from 'mobx-react';
import { Switch, Route, IndexRoute, IndexLink, Redirect, Link, withRouter } from 'react-router-dom';

//引入组件  --> 应该在 router 下引入
import demo from './demo/router.js'
import demo2 from './demo2/router.js'

@withRouter // Link 跳转同步更新 view，设置路由一定要加
@inject('store')
@observer
export default class extends React.Component {
    render() {
        return (
            <Switch>
                {/* path 为 ‘/’ 的路径一定要放在最后！！ 或者加 exact 精确匹配 */}
                <Route exact path="/" render={() => (
                    <div>
                        <p>我是主页</p>
                        <Link to='/demo2/show'>hahhahhahha</Link>
                        <DevTools />
                    </div>
                )} />
                {/* 一定不能使用 exact 属性，因为我们希望 /demo 匹配任何以 /demo 开头的路由， */}
                <Route path='/demo' component={demo} />
                <Route path='/demo2' component={demo2} />

                <Redirect to="/" />
            </Switch>
        )
    }
}
