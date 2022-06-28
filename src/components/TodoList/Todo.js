import React from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            content: this.props.content,
        };
    }

    enableEdit() {
        this.setState({edit: true});
    }

    edit(event) {
        this.setState({content: event.target.value});
    }

    saveEdit() {
        this.setState({edit: false});
        return this.props.onEdit(this.state.content);
    }

    keyPress(e) {
        console.log('ok');
        console.log(e);
        if(e.key === 'Enter') {
            this.saveEdit();
        }
    }

    render(){
        return(
            <div className="todo" onDoubleClick={ () => this.enableEdit() }>
                {this.state.edit ? 
                    ( <input type="text"
                        autoFocus
                        value={this.state.content} 
                        onChange={ event => this.edit(event) } 
                        onBlur={ () => this.saveEdit() } 
                        onKeyPress= { e => this.keyPress(e) }
                        /> )
                    : 
                    ( <p>{this.state.content}</p> )
                }
                <button type="button" onClick={ () => this.props.onDelete() }>X</button>
            </div>
        );
    }
}

export default Todo;