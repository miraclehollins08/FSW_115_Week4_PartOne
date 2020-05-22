
axios.get("")
.then(Response => {
    for(let i = 0; i < Response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = Response.data[i].title
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))

function todoList() {
	var item    = document.getElementById('todoInput').value
	var text    = document.createTextNode(item)
	var newItem = document.createElement('li')
	newItem.appendChild(text)
	document.getElementById('todoList').appendChild(newItem)
}