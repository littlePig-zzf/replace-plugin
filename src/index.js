const replace = require('../src/replace')

// 在命令行先执行export REPLACE_ENV = true
// 再运行webpack文件，否则获取REPLACE_ENV的默认值
class Replace {
    constructor(options) {
        this.options = options
    }
    apply(compiler) {

        compiler.hooks.done.tap('replace', (compile)=> {
            
            replace(this.options.langRerource, this.options.filePath)
        })
    }
}

module.exports = Replace