import gql from "graphql-tag"

export const TodoQuery = {
  allTodoes: gql`
    {
      todoes {
        id
        title
        description
        is_done
        author {
          name
        }
      }
    }
  `
}

export const TodoMutation = {
  createTodo: gql`
    mutation createUserTodo($title: String!, $description: String) {
      createTodo (data: {
        title: $title
        description: $description
        author: {
          connect: {
            email: "m.chairul669@gmail.com"
          } 
        }
      }) {
        id
      }
    }
  `,
  toggleTodo: gql`
    mutation UpdateTodo($id: ID!, $is_done: Boolean) {
      updateTodo(
        where: {id: $id}
        data: {
          is_done: $is_done
        }
      ) {
        id
      }
    }
  `,
  updateTodo: gql`
    mutation UpdateTodo($id: ID!, $title: String!, $description: String!) {
      updateTodo(
        where: {id: $id}
        data: {
          title: $title
          description: $description
        }
      ) {
        id
      }
    }
  `,
  deleteTodo: gql`
    mutation deleteUserTodo($id: ID!) {
      deleteTodo (where: {id: $id}) {
        id
      }
    }
  `
}
