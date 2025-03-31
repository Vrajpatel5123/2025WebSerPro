/* B"H
*/

const data = require("../data/products.json");

// 03/31/2025 add async function to all the functions as shows below!

//Inside model never have EXPRESS, only in controller
async function getAll(){
    return data
}

async function get(id){
    return data.items.find((item) => item.id === id)
}

async function create(item){
    const newItem = {
        id: data.items.length + 1,
        ...item
    }
    data.items.push(newItem)
    return newItem
}

async function update(id,item){
    const index = data.items.findIndex((item) => item.id === id)
    if(index === -1){
        return null
    }
    const updatedItem = {
        ...data.items[index],  //... is it takes every single and copy all the properties of the object
        ...item //... it takes the properties of the item and copy all the properties of the object
        //new object that has properties of the old object and the new object
    }
    data.items[index] = updatedItem
    return updatedItem
}

async function remove(id){
    const index = data.items.findIndex((item) => item.id === id)
    if(index === -1){
        return null
    }
    const deletedItem = data.items[index]
    data.items.splice(index, 1) //index is the position of the item and 1 is how many items to remove
    return deletedItem
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}