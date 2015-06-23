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
        this.changeRow = this.changeRow.bind(this);
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

    changeRow(selectedKey){
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

    render () {
        var isMulti = true;
        return <div className="panel panel-default">
            <div className="panel-heading">
                <Checkbox isChecked={this.state.isChecked} isMulti={isMulti} onChange={this.changeAllUsers}/>
                <Button onClick={this.showIds}>Show ids</Button>
            </div>
            <div className="panel-body">
                <Table users={this.state.users} changeRow={this.changeRow} />
            </div>
            <div className="panel-footer">
            </div>
        </div>;
    }
}

export default AppRoot;