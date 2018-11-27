import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';
import { Menu, Input, Icon, Form, Confirm } from 'semantic-ui-react';
import {searchRecipesThunk} from '../store/genericRecLists'
import history from '../history'
import AccountMenu from './UserAcct/AccountMenu';

class Navbar extends React.Component {
	constructor() {
		super()
		this.state = {
			active: '',
			value: ''
		}
	}
	handleClick = () => {
		this.props.logout()
	}
	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	handleSubmit = async(e) => {
    if(this.state.value.length){
		e.preventDefault()
		const query = this.state.value
		this.props.searchRecipesThunk(query);
		this.setState({value: ''})
    history.push(`/search?key=${query}`)
    }
	}

  handleItemClick = (e, { name }) => this.setState({ active: name });
  render() {
    const { active } = this.state;
    const empty = this.state.value.length
    return (
      <Menu>
        <Menu.Item
          as={Link}
          to="/home"
          name="home"
          active={active === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <AccountMenu />
        <Menu.Item
          as={Link}
          to="/recipes"
          name="recipes"
          active={active === 'recipes'}
          onClick={this.handleItemClick}
        >All Recipes </Menu.Item>
        <Menu.Item>
          <Form onSubmit={this.handleSubmit} >
            <Input
              onChange={this.handleChange}
              icon={<Icon name="search" inverted circular link />}
              placeholder="Search Recipes..."
              value={this.state.value}
            />
          </Form>
        </Menu.Item>

					<Menu.Item onClick={this.handleClick} position="right">
						Log out
					</Menu.Item>

				</Menu>
			)
		}
	}

const mapState = state => ({isLoggedIn: !!state.user.id})

const mapDispatch = dispatch => ({
	logout: () => dispatch(logout()),
	searchRecipesThunk: (q) => dispatch(searchRecipesThunk(q))
})

export default connect(mapState, mapDispatch)(Navbar);

Navbar.propTypes = {
	// handleClick: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};
