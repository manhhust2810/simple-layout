import React, { Component } from 'react';
import Header from '../components/user-manager/Header';
import TableData from '../components/user-manager/TableData';
import Search from '../components/user-manager/Search';
import AddUser from '../components/user-manager/AddUser';
import EditUser from '../components/user-manager/EditUser';
import Data from '../DataSample.json';
import Footer from './Footer';
import styled from 'styled-components';
class UserManager extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: [],
      editUser: { user: null, display: false }
    };
    this.searchUsers = this.searchUsers.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.cancelEditUser = this.cancelEditUser.bind(this);
    this.updateEditUser = this.updateEditUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillMount() {
    // Check localStorage
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(Data));
    }
    let data = localStorage.getItem('userData');
    this.setState({
      userData: JSON.parse(data)
    });
  }

  searchUsers(event) {
    let keyword = event.target.value.toLowerCase();
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.setState({
      userData: userData.filter(item => {
        // Find user by Name or Phone
        return (
          item.name.toLowerCase().indexOf(keyword) >= 0 ||
          item.phone.indexOf(keyword) >= 0
        );
      })
    });
  }

  createNewUser(newUser) {
    // Parse permisstion to number
    let newData = this.state.userData;
    newUser.permission = parseInt(newUser.permission);
    newData.push(newUser);
    this.setState({
      userData: newData
    });

    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData));
  }

  editUser(userId) {
    var user = this.state.userData.filter(item => item.id === userId)[0];
    this.setState({
      editUser: { user: user, display: true }
    });
  }

  cancelEditUser() {
    this.setState({
      editUser: { ...this.state.editUser, display: false }
    });
  }

  updateEditUser(user) {
    const userIndex = this.state.userData.findIndex(
      item => item.id === user.id
    );
    user = { ...this.state.userData[userIndex], ...user }; // update data user
    const newData = this.state.userData;
    newData[userIndex] = { ...user }; // update edited user to data
    this.setState({
      userData: newData
    });
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData));

    // Hide edit form
    this.setState({
      editUser: { ...this.state.editUser, display: false }
    });
  }

  deleteUser(userId) {
    const newData = this.state.userData.filter(item => item.id !== userId);
    this.setState({
      userData: newData
    });
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Search searchUsers={this.searchUsers} />
              <AddUser createNewUser={this.createNewUser} />
              {this.state.editUser.display && (
                <EditUser
                  user={this.state.editUser.user}
                  cancelEditUser={this.cancelEditUser}
                  updateEditUser={this.updateEditUser}
                />
              )}
            </div>
            <div className="col-9">
              <TableData
                users={this.state.userData}
                editUser={this.editUser}
                deleteUser={this.deleteUser}
              />
            </div>
          </div>
        </div>
        <FooterStyle>
          <Footer />
        </FooterStyle>
      </div>
    );
  }
}

const FooterStyle = styled.div`
  width: 100%;
  height: 60px; /* Height of the footer */
  background: #1f568b;
  text-align: center;
  padding: 10px;
  color: white;
  margin-top: 60px;
  position: relative;
`;

export default UserManager;
