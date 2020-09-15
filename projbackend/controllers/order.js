const Order = require("../models/order");
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');


exports.getOrders = (req, res) => {
    Order.find(function (err, Orders) {
        if (err) {
            return res.status(400).json({
                error: "NO Order found"
            })
        }
        else {
            res.json(Orders)
        }

    })


}

exports.getUserOrders = (req, res) => {
    let id = req.params.id;
    Order.findById(id, (err, Order) => {
        if (err) {
            return res.status(400).json({
                error: "List not found"
            })
        }
        else {
            return res.json(Order)
        }
    })
}

exports.addOrders = async (req, res) => {

   
    try {
        const Product = new Order(req.body)
        await Product.save()
        res.json(Product)

    } catch (err) {
        //return res.json(err);
        return res.status(500).json({
            message: 'Unable to create a Order',
            err: JSON.stringify(err)
        })
    }

};



exports.updateOrders = (req, res) => {

    Order.update(
        { _id: req.params.id },
        {
            $set: {
                Product: req.body.Product,
                date: req.body.date,
                country: req.body.country,
            }
        }, (err, updateOrder) => {
            if (err) {
                return res.status(400).json({
                    error: "not updated"
                })
            }
            else {
                res.json(updateOrder)
            }
        }
    )
}

exports.removeOrders = (req, res) => {
    
    
    Order.remove(
        { _id: req.params.id },
        (err, Product) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete this category"
            });
        }
        res.json({
            message: "Successfull deleted "
        });
    });
};

exports.searchOrders = (req, res) => {

    Order.findOne({
        $text: {
            $search: req.body.query
        }
    }
    /*Order.find(
        {
            $text: {
                $search: req.body.query
            }
        }*/,
        (err, Product) => {
            if (err) {
                return res.status(400).json({
                    error: "Failed to delete this category"
                });
            }
            res.json(Product)
        });
};
