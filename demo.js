const urlChecker = {
    verify: function (url) {
        try {
            const validation = new URL(url)
            return true
          
           } catch (error) {
               return false
           }
          
    }
}


module.exports = urlChecker;