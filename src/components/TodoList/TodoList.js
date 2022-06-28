import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import './style.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: ['Je dois faire ca', 'puis faire ca', 'et enfin finir ca', 'New task...'],
        }
    }

    validTodos(todos) {
        if(todos.at(-1) != 'New task...') {
            todos.push('New task...');
        }
        return todos;
    }

    removeTodo(i) {
        let todos = [...this.state.todos];
        todos.splice(i, 1);
        this.setState({todos: this.validTodos(todos)});
    }

    editTodo(i, content) {
        let todos = [...this.state.todos];
        todos[i] = content;
        this.setState({todos: this.validTodos(todos)});
    } 

    renderTodo(i) {
        return <Todo key={ `todo-${i}`} content={this.state.todos.at(i)} onDelete={ () => this.removeTodo(i)} onEdit={ (content) => this.editTodo(i, content) } />
    }

    render() {

        let todos = Object.keys(this.state.todos).map(i => this.renderTodo(i));

        return (
            <div className='todolist'>
                <h1>Todo list</h1>
                <ol className='todolist-list'>
                    {todos}
                </ol>
            </div>
        );
    }

}

export default TodoList;