import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProductById, getProducts, updateAvailability, deleteProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"
import { updateProduct } from "./handlers/product"

const router = Router()


/**
 * @swagger
 * components:
 *   schemas:
 *      Product:
 *          type: object
 *          properties: 
 *              id: 
 *                  type: integer
 *                  description: The Product ID
 *                  example: 1
 *              name: 
 *                  type: string
 *                  description: The Product name
 *                  example: Monitor Curvo de 49 Pulgadas
 *              price: 
 *                  type: string
 *                  description: The Product price
 *                  example: 40000
 *              availabiblity: 
 *                  type: boolean
 *                  description: The Product availabiblity
 *                  example: true  
 * 
 */

/**
 * @swagger
 * /api/products:
 *      get: 
 *          summary: Get a list of products
 *          tags:
 *              - Products
  *         description: Return a list of products
 * 
 */


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
    
    param('id').isInt().withMessage('ID no valido'),
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


router.patch('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    updateAvailability)


router.delete('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    deleteProduct
)


export default router