import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProductById, getProducts } from "./handlers/product"
import { handleInputErrors } from "./middleware"
import { updateProduct } from "./handlers/product"

const router = Router()


//Routing
router.get('/', getProducts)
router.get('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    getProductById
)


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


router.put('/:id',
    
     //Validacion
    body('name')
        .trim()
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
               
    body('price')
        .trim()
        .isNumeric().withMessage('Valor no valido')
        .custom( value => value > 0).withMessage('Precio no valido'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no valido'),
        handleInputErrors,
    updateProduct)


router.patch('/', (req, res) => {
    res.json('desde patch')
})


router.delete('/', (req, res) => {
    res.json('desde delete')
})


export default router