import * as stateCoeffect from "./state";
import { store as storeModule } from "reffects-store";
import { clearHandlers, coeffect, getCoeffectHandler } from "reffects";

export function destroyAllMocks() {
  jest.restoreAllMocks();
  jest.clearAllMocks();
}

export function callsTo(spyFn) {
  return spyFn.mock.calls;
}

describe("state coeffect", () => {
  expect(storeModule.getState).toBeDefined();

  afterEach(() => {
    clearHandlers();
    destroyAllMocks();
  });

  test("should extract the expected values from the store", () => {
    const state = {
      todos: [{ id: "123", text: "saludos", isDone: true }],
      toast: { id: "pepe" }
    };
    const pathToTodos = "todos";
    const pathToToastId = "toast.id";
    const coeffectDescription = coeffect("state", {
      todosRenamed: "todos",
      toastId: "toast.id"
    });
    const store = {};
    store.getState = jest
      .fn()
      .mockReturnValueOnce(state.todos)
      .mockReturnValueOnce(state.toast.id);
    stateCoeffect.register(store);
    const stateHandler = getCoeffectHandler(coeffectDescription.id);

    expect(stateHandler(coeffectDescription.data)).toEqual({
      [coeffectDescription.id]: {
        todosRenamed: state.todos,
        toastId: state.toast.id
      }
    });
    expect(store.getState).toHaveBeenCalledTimes(2);
    expect(callsTo(store.getState)).toEqual([[pathToTodos], [pathToToastId]]);
  });
});
