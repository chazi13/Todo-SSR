import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useQuery, useMutation } from "react-apollo";

import { TodoQuery, TodoMutation } from "@graphql/todos";
// import { userQueries } from "@graphql/user";

function Index(props) {
  const {
    loading: todosLoading,
    data: dataTodos,
    refetch: todosRefetch
  } = useQuery(TodoQuery.allTodoes);

  const [createTodo, {loading: addLoading}] = useMutation(TodoMutation.createTodo);
  const [toggleTodo] = useMutation(TodoMutation.toggleTodo);
  const [updateTodo, {loading: updateLoading}] = useMutation(TodoMutation.updateTodo);
  const [deleteTodo, {loading: deleteLoading}] = useMutation(TodoMutation.deleteTodo);

  const [selectedTodo, setSelectedTodo] = useState({});
  const [edited, setEdited] = useState(false);

  function _handleEditTodos(todo) {
    setSelectedTodo(todo);
    setEdited(true);
  }

  function _handleDelete(id) {
    deleteTodo({
      variables: {id},
      update: () => todosRefetch()
    })
  }  

  return (
    <div className="container">
      <div className="pt-5">
        <div className="row justify-content-around">
          <div className="col-6 mt-3">
            <h3 className="text-center">Todo App</h3>
            <div className="card">
              <div className="card-body">
                {todosLoading ? (
                  <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                ) : (
                  <ul className="list-group list-group-flush">
                    {dataTodos.todoes.map(todo => (
                      <li key={todo.id} className="list-group-item">
                        <div className="row">
                          <div className="col-8">
                          <div className="custom-control custom-checkbox">
                            <input 
                              type="checkbox" 
                              className="custom-control-input" 
                              id={`checkbox-${todo.id}`} 
                              defaultChecked={todo.is_done} 
                              onChange={(e) => {
                                toggleTodo({
                                  variables: {id: todo.id, is_done: !todo.is_done}
                                })
                              }}
                            />
                            <label className="custom-control-label" htmlFor={`checkbox-${todo.id}`}>
                              <span>{todo.title}</span> <br />
                              <span className="text-muted">{todo.description}</span>
                            </label>
                          </div>
                          </div>
                          <div className="col-4 text-right">
                            <button 
                              className="btn btn-sm btn-info"
                              onClick={() => _handleEditTodos(todo)}
                            >
                              Edit
                            </button> &nbsp;
                            <button 
                              className="btn btn-sm btn-danger"
                              onClick={() => _handleDelete(todo.id)}
                            >
                              {deleteLoading ? (
                                <div class="spinner-border text-light" role="status">
                                  <span class="sr-only">Loading...</span>
                                </div>
                              ) : 'Delete'
                              }
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="card-footer">
                <Formik
                  initialValues={{
                    title: edited ? selectedTodo.title : '',
                    description: edited ? selectedTodo.description : ''
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (!edited) {
                      createTodo({
                        variables: values,
                        update: () => todosRefetch()
                      });
                    } else {
                      updateTodo({
                        variables: {...values, id: selectedTodo.id},
                        update: () => todosRefetch()
                      })

                      setEdited(false);
                      setSelectedTodo({});
                    }

                    resetForm();
                    setSubmitting(false);
                  }}
                  enableReinitialize
                >
                  {({ isSubmitting }) => (
                    <Form className="form-row">
                      <div className="col-10 align-items-end">
                        <div className="form-group">
                          <Field type="text" name="title" className="form-control" placeholder="Enter your todo title" />
                        </div>
                        <div className="form-group">
                          <Field type="text" name="description" className="form-control" placeholder="Enter your todo description" />
                        </div>
                      </div>
                      <div className="col-2">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block float-right h-75">
                          {addLoading || updateLoading ? (
                            <div class="spinner-border text-light" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>
                          ) : 
                            edited ? 'Save' : 'Add'
                          }
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
