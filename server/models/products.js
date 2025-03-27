/* B"H
*/

const data = require("../data/products.json");

//Inside model never have EXPRESS, only in controller
function getAll(){
    return data
}

function get(id){
    return data.find((item) => item.id === id)
}

function create(item){
    const newItem = {
        id: data.length + 1,
        ...item
    }
    data.push(newItem)
    return newItem
}

function update(id,item){
    const index = data.findIndex((item) => item.id === id)
    if(index === -1){
        return null
    }
    const updatedItem = {
        ...data[index],  //... is it takes every single and copy all the properties of the object
        ...item //... it takes the properties of the item and copy all the properties of the object
        //new object that has properties of the old object and the new object
    }
    data[index] = updatedItem
    return updatedItem
}

function remove(id){
    const index = data.findIndex((item) => item.id === id)
    if(index === -1){
        return null
    }
    const deletedItem = data[index]
    data.splice(index, 1) //index is the position of the item and 1 is how many items to remove
    return deletedItem
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}