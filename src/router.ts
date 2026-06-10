import { Router } from "express"
import { body } from "express-validator"
import { createProduct, getProductById, getProducts } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()


//Routing
router.get('/', getProducts)
router.get('/:id', getProductById)


router.post('/',
    
    //Validacion
    body('name')
        .trim()
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
               
    body('price')
        .trim()
        .isNumeric().withMessage('Valor no valido')
        .custom( value => value > 0).withMessage('Precio no valido'),
    handleInputErrors,
    createProduct
)


router.put('/', (req, res) => {
    res.json('desde put')
})


router.patch('/', (req, res) => {
    res.json('desde patch')
})


router.delete('/', (req, res) => {
    res.json('desde delete')
})


export default router