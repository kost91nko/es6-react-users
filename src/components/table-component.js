import React from '../../node_modules/react/addons';
import UserRow from './user-row-component.js'

class TableComponent extends React.Component {
    constructor(props) {
        super(props);
/*        this.state = {
            users: this.props.users
        };*/

        this.onChangeUserStatus = this.onChangeUserStatus.bind(this);
    }

    onChangeUserStatus(key, checked){
        var newUsers = this.props.users;
        newUsers[key].isChecked = checked;
        this.props.changeUsers(newUsers);
    }

    render() {
        var self = this;
        return <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
                {this.props.users.map(function (user,key) {
                    return <UserRow changeUserStatus={self.onChangeUserStatus} reactKey={key} key={user.id} user={user}/>
                })}
            </tbody>
        </table>;
    }
}

export default TableComponent;