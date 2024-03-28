import React, { Component } from 'react'

export default class Clock extends Component {

  // state = { date: new Date() };

  constructor(props) {
    super(props);

    this.state = {
      date: new Date (),
    }
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const {locale} = this.props;
    const {date} = this.state;
    return (
      <div>{date.toLocaleTimeString(locale)}</div>
    )
  }
}
