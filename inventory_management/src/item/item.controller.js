const express = require("express")

const { createItem, getAllItem, getItemById, editItembyId, deletItemById } = require("./item.service");
const { editUser } = require("../user/user.repository");

const router = express.Router();

// create item
router.post("/", async(req, res) =>{
    try {
        const newItemData = req.body;
        const newItem = await createItem(newItemData)
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).send(error.message)
        
    }
})

router.get("/", async(req, res) => {
    try {
        const item = await getAllItem()
        res.status(200).send(item);
    } catch (error) {
        res.status(500).send(error.message)   
    }  
})

router.get("/:id", async(req, res) => {
    try {
        const itemId = parseInt(req.params.id);
        const item = await getItemById(itemId)
        res.status(200).send(item)
    } catch (error) {
        res.status(400).send(error.message)    
    }
    
})

router.put('/:id', async (req, res) => {
    try {
        const itemId = req.params.id
        const itemData = req.body;
        const updateItem = await editItembyId(itemId, itemData);
        res.send(updateItem)
    } catch (error) {
        res.status(400).send(error.message);    
    }
    
})

router.delete("/:id", async(req,res) =>{
    try {
        const itemId = req.params.id
        await deletItemById(itemId)
        res.status(204).json({massage: "item deleted"});
    } catch (error) {
        res.status(400).send(error.message);   
    }
});


module.exports = router;