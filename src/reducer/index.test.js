import reducer from '.';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const action = {
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title',
        },
      };

      const { taskTitle } = reducer(previousState, action);

      expect(taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    it('returns new state with new task', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      const { newId, tasks } = previousState;

      const action = {
        type: 'addTask',
        payload: {
          newId: newId + 1,
          taskTitle: '뭐라도 하기',
          tasks,
        },
      };

      const { tasks: todos } = reducer(previousState, action);

      expect(todos).toHaveLength(1);
    });
  });

  describe('deleteTask', () => {
    it('remove the task from tasks', () => {
      const previousState = {
        newId: 100,
        taskTitle: '',
        tasks: [
          {
            id: 1,
            title: 'Task',
          },
        ],
      };

      const { newId } = previousState;

      const action = {
        type: 'deleteTask',
        payload: {
          newId,
        },
      };

      const { tasks } = reducer(previousState, action);

      expect(tasks).toHaveLength(0);
    });
  });
});
