import { connect } from 'react-redux';
import TodoList from './src/TodoList'; // Create this component later
import { toggleTodo, removeTodo } from './src/actions';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
