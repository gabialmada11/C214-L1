const validate = require('validate.js');
const calculadoraConstraint = require('./validate');

const Calculadora = {
    soma(num1, num2){
        const validateNum = validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validateNum)
        if(validateNum !== undefined){
            return 'Error';
        }
        var a = num1 + num2;
        return a;
    },

    sub(num1, num2){
        const validateNum = validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validateNum)
        if(validateNum !== undefined){
            return 'Error';
        }
        var b = num1 - num2;
        return b; 
    },

    mult(num1, num2){
        const validateNum = validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validateNum)
        if(validateNum !== undefined){
            return 'Error';
        }
        var c = num1 * num2;
        return c;
    },

    div(num1, num2){
        const validateNum = validate({num1, num2}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validateNum)
        if(validateNum !== undefined){
            return 'Error';
        }
        var d = num1 / num2;
        return d; 
    },

    raiz(num1){
        const validateNum = validate({num1}, calculadoraConstraint.calculadoraConstraint);
        console.log("Validate", validateNum)
        if(validateNum !== undefined){
            return 'Error';
        }
        var e = Math.sqrt(num1);
        return e; 
    }

};
module.exports = Calculadora;