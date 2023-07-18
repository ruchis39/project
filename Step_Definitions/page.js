const {element,by} = require ('protractor')

class DCRpage{
    
   email = element(by.name("email"))

   password = element(by.name("pass"))

   loginbtn = element(by.name("login"))

}

exports.DCRpage = DCRpage



