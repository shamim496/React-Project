import React, { Component } from 'react'

class From extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Javascript',
            text: 'Javascript is awesome',
            library: 'React',
            check: false
        }
    }

    handleChange = (event) => {
        if (event.target.type === 'text') {
            this.setState({
                title: event.target.value,
            });
        } else if (event.target.type === 'textarea') {
            this.setState({
                text: event.target.value,
            })
        }else if (event.target.type === 'select-one') {
            this.setState({
                library: event.target.value,
            })
        }else if (event.target.type === 'checkbox') {
            this.setState({
                check: event.target.checked,
            })
        }else {
            // console.log(event.target.type);
            console.log('Noting Here')
        }

    }


    handleSumbit = (e) => {
        const { title, text, library, check } = this.state;
        e.preventDefault();
        console.log(title, text, library, check);
    }


  render() {
    const {title, text, library, check} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSumbit}>
            <input
                onChange={this.handleChange}
                type="text" value={title}
                placeholder='Enter Title'
            />

            <br/>
            <br/>

            <textarea
                name='text'
                value={text}
                onChange={this.handleChange}
            ></textarea>

            <br/>
            <br/>

            <select
                value={library}
                onChange={this.handleChange}
            >
                <option value="React">React</option>
                <option value="angular">Angular</option>
            </select>

                <br />
                <br />
            <input
                type="checkbox"
                checked={check}
                onChange={this.handleChange}
            />

            <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default From;