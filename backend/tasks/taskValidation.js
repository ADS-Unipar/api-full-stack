const zod = require('zod');

const taskSchema = zod.object({
    title: zod.string("O título é obrigatório").min(1, 'O título é obrigatório'),
    description: zod.string("A descrição não pode exceder 255 caracteres").max(255, 'A descrição não pode exceder 255 caracteres').optional(),
    status: zod.number("O status deve ser um número inteiro").int("O status deve ser um número inteiro").min(0, 'O status deve ser um número inteiro entre 0 e 2' ).max(2, 'O status não pode exceder 2').optional()
});


module.exports = taskSchema;