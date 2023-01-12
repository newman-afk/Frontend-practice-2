const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false
let editId = ''
form.addEventListener('submit', addItem)

clearBtn.addEventListener('click', clearItem)

window.addEventListener('DOMContentLoaded', setupItems)

function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {
        createlistItem(id, value)
        displayAlert('item added to the list', 'success')
        container.classList.add('show-container')
        addToLocalStorage(id, value)
        setBackToDefault()
    } else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert('value changed', 'success')
        editLocalStorage(editId, value)
        setBackToDefault()
    } else {
        displayAlert("please enter value", "danger");
    }
}

function clearItem() {
    const items = document.querySelectorAll('.grocery-item')
    if (items.length > 0) {
        items.forEach((item) => {
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    setBackToDefault()
    localStorage.removeItem('list')
    setBackToDefault()
}

function setupItems() {
    const items = getLocalStorage()
    if (items.length > 0) {
        items.forEach((item) => {
            createlistItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id

    list.removeChild(element)
    if (list.children.length == 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setBackToDefault()
    removeFromLocalStorage(id)
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    editElement = e.currentTarget.parentElement.previousElementSibling
    grocery.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = 'edit'
}

function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    }, 1000);
}
function setBackToDefault() {
    editFlag = false
    editId = ''
    grocery.value = ''
    submitBtn.textContent = 'submit'

}
function addToLocalStorage(id, value) {
    const grocery = { id, value }
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items))
}
function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}
function createlistItem(id, value) {
    const element = document.createElement('article')
    element.setAttribute('data-id', id)
    element.classList.add('grocery-item')
    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `
    const deleteBtn = element.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', deleteItem)
    const editBtn = element.querySelector('.edit-btn')
    editBtn.addEventListener('click', editItem)

    list.appendChild(element)
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage()
    items = items.filter((item) => {
        if (item.id != id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}
function editLocalStorage(id, value) {
    let items = getLocalStorage()
    items = items.map((item) => {
        if (item.id == id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem('list', JSON.stringify(items))
}