/**
 * This code will rename effect name from "initEffect" to "init".
 * It starts by reading source code content from file.
 * Then, generate AST using @bable/parser.
 * Then, find identifier that match the name "initEffect" and update it.
 * Finally, it will generate a new source code content using @babel/generator
 */
const fs = require('fs-extra')
const path = require('path')
const parser = require('@babel/parser')
const {CodeGenerator} = require('@babel/generator')
const {default: traverse} = require('@babel/traverse')

const filePath = path.resolve(__dirname, './samples/state/system/effects/init.js')

const code = fs.readFileSync(filePath).toString()

console.log(code)

const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: [
    'flow',
  ]
})


traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: 'initEffect' })) {
      path.node.name = 'init'
    }
  }
})


const generator = new CodeGenerator(ast, {
  retainLines: true,
}, code)

console.log(generator.generate().code)