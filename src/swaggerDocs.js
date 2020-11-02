const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title : "parthu docs",
            description : "parth application information",
            contact: {
                name: "Parth Parmar"
            },
            servers: ['https://localhost:3000'] 

        }
     },
     apis: ['apps.js']
}