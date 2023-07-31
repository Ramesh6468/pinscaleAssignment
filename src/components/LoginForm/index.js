import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  onChangeInput1 = event => {
    this.setState({username: event.target.vaue})
  }

  onChangeInput2 = event => {
    this.setState({password: event.target.vaue})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://bursting-gelding-24.hasura.app/api/rest/get-user-id'
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="bgCard">
        <form className="formCard" onSubmit={this.submitForm}>
          <div className="inputCard1">
            <label htmlFor="input1" className="label1">
              Username
            </label>
            <input
              type="text"
              className="input1"
              id="input1"
              onChange={this.onChangeInput1}
              value={username}
              placeholder="Enter Username"
            />
          </div>
          <div className="inputCard1">
            <label htmlFor="input2" className="label1">
              Password
            </label>
            <input
              type="password"
              className="input1"
              id="input2"
              onChange={this.onChangeInput2}
              value={password}
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
