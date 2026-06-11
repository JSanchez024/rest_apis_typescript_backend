import { Request, Response } from "express"
import Product from "../models/Product.model"


export const getProducts = async(req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ]

        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error en el servidor' })
    }
}

export const getProductById = async(req: Request, res: Response) => {
    try {
       const {id} = req.params
       const product = await Product.findByPk(id as string)

       if(!product){
        return res.status(404).json({
            error: 'Producto no encontado'
        })
       }

       res.json({data: product})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error en el servidor' })
    }
}


export const createProduct = async (req : Request, res : Response) => {
  
   try {
        const product = await Product.create(req.body)
        res.status(201).json({data: product})   
   } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error al crear el producto' })
   }
}


export const updateProduct = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const product = await Product.findByPk(id as string)

        if (!product) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            })
        }

        //Actualizar
        await product.update(req.body)
        await product.save()

        res.json({ data: product })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error en el servidor' })
    }

  
}