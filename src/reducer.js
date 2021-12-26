const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
  case 'updateTaskTitle': {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  case 'addTask': {
    const { newId, tasks, taskTitle } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }
  case 'deleteTask': {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter(
        (task) => task.id !== action.payload.id
      ),
    };
  }
  default:
    return state;
  }
}
