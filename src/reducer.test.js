import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  context('default with initial state', () => {
    const initialState = {
      newId: 100,
      taskTitle: '',
      tasks: [],
    };
    it('return default state when wrong action is passed', () => {
      const state = reducer(initialState, { type: 'wrong' });

      expect(state).toMatchObject(initialState);
    });

    it('return default state when state is not passed to reducer', () => {
      const state = reducer(undefined, { type: 'wrong' });

      expect(state).toMatchObject(initialState);
    });
  });

  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      const state = reducer(
        { taskTitle: '' },
        updateTaskTitle('New Title'),
      );

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer(
        {
          newId: 100,
          taskTitle,
          tasks: [],
        },
        addTask(),
      );
    }
    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });

      it('clears task title', () => {
        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("it doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function deleteReducer(id) {
      return reducer(
        {
          tasks: [
            { id: 1, title: 'Task' },
          ],
        },
        deleteTask(id),
      );
    }

    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = deleteReducer(1);

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doens't work", () => {
        const state = deleteReducer(100);

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
