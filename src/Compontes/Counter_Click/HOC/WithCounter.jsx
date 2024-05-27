import React from 'react';

const WithCounter = (Originalcomponent) => {
  class NewComponent extends React.Component{
      constructor(props) {
          super(props);

          this.state = {
              count: 0,
          }
      }

      incrementCount = () => {
          this.setState((prevstate) => ({
              count: prevstate.count + 1
          }))
      }

      render() {
        const {count} = this.state;
        return <Originalcomponent count={count} incrementCount={this.incrementCount}/>
      }
  }
  return NewComponent;
}

export default WithCounter;