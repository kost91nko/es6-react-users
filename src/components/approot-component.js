import React from 'react/addons';
import Table from './table-component.js';
import Button from './button-component.js';
import Checkbox from './checkbox-component.js';

class AppRoot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            users: this.props.state.table.users
        };

        this.changeAllUsers = this.changeAllUsers.bind(this);
        this.showIds = this.showIds.bind(this);
        this.onChangeUsers = this.onChangeUsers.bind(this);
        this.changeRow = this.changeRow.bind(this);
    }

    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    changeAllUsers (multiSelect){
        var state = this.state.users.map(function(d) {
            return {
                id: d.id,
                firstName: d.firstName,
                lastName: d.lastName,
                userName: d.userName,
                isChecked: multiSelect
            };
        });
        this.setState({
            users: state,
            isChecked: multiSelect
        });
    }

    showIds(){
        var rows = this.state.users;
        var initStr = "User Ids: ";
        var idStr = initStr;
        rows.forEach(function (row) {
            if (row.isChecked) {
                idStr += row.id + " ";
            }
        });

        if(idStr == initStr) {
            idStr = "No records are selected";
        }

        console.log(idStr);
    }

    onChangeUsers(newUsers){
        this.setState({
            users: newUsers
        });
    }
    changeRow(selectedKey){
        //this.props.changeUserStatus(this.props.reactKey, isChecked);
        var state = this.state.users.map(function(d, key) {
            return {
                id: d.id,
                firstName: d.firstName,
                lastName: d.lastName,
                userName: d.userName,
                isChecked: (selectedKey === key ? !d.isChecked : d.isChecked)
            };
        });

        this.setState({ users: state });
    }
    ////<Table users={this.state.users} changeUsers={this.onChangeUsers} />
    render () {
        var isMulti = true;
        var self = this;
        //var isChecked = false;
        return <div className="panel panel-default">
            <div className="panel-heading">
                <Checkbox isChecked={this.state.isChecked} key={'ddddddd'} isMulti={isMulti} onChange={this.changeAllUsers}/>
                <button className="btn btn-default action-button" type="submit" onClick={this.showIds}>Show ids</button>
            </div>
            <div className="panel-body">

                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(function (user,key) {
                        var isMulti = false;
                        return <tr >
                            <th scope="row">
                                <Checkbox
                                    class="multi-select"
                                    isChecked={user.isChecked}
                                    reactKey={key}
                                    isMulti={isMulti}
                                    value={user.id}
                                    onChange={self.changeRow}/>
                            </th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.userName}</td>
                        </tr>;
                    })}
                    </tbody>
                </table>;
            </div>
        </div>;
    }
}

export default AppRoot;