function showRequest(){
    const todoListContainer = document.getElementById('todoList');
    const url = 'http://localhost:3000/todos';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const todoList = Object.entries(data.rows).map(([key, value]) => {
                return value.doc.title
            });
            return todoList.map(todo => {
                const listedTodo = document.createElement('li')
                listedTodo.innerHTML = `${todo}`
                todoListContainer.appendChild(listedTodo)
            })
        })
        .catch(err => {
            console.log('ERROR ON FETCH', err);
        })
}
