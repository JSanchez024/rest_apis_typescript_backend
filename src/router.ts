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
 *              availability: 
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
 *          description: Reutrn a list of product
 *          responses: 
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 * 
 */


//Routing
router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *  get: 
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses: 
 *          200:
 *              description: Successful Response
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Not found
 *          400:
 *              description: Bad Request - Invalid ID
 * 
 */

/**
 * @swagger
 * /api/products:
 *  post: 
 *      summary: Creates a new product
 *      tags: 
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor curvo 49 Pulgadas"
 *                          price:
 *                              type: number
 *                              example: 50000
 *      responses:
 *           201:
 *              description: Successful response
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *           400:
 *               description: Bad Request - invalid input data
 * 
 */

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

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Updates a product with user input
 *      tags:
 *          - Products
 *      description: Return the update product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor curvo 49 Pulgadas"
 *                          price:
 *                              type: number
 *                              example: 50000
 *                          availability:
 *                              type: boolean
 *                              example: true
 *      responses: 
 *          200:
 *              descrition: Successful response
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *  
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product Not Fund
 * 
 * 
 * 
 *
 * 
 * 
 */




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
    updateProduct
)


/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Update Product availability
 *      tags: 
 *          - Products
 *      description: Returns the update availability
 *      parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *             type: integer
 *      responses: 
 *          200:
 *              descrition: Successful response
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *  
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Fund
 */



router.patch('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    updateAvailability)

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Delete Product by a given ID
 *      tags: 
 *          - Products
 *      description: Returns a confirmation message
 *      parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to delete
 *         required: true
 *         schema:
 *             type: integer
 *      responses: 
 *          200:
 *              descrition: Successful response
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          value: 'Producto Eliminado'
 *  
 *          400:
 *              description: Bad Request - Invalid ID
 *          404:
 *              description: Product Not Fund
 */


router.delete('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    deleteProduct
)



export default router