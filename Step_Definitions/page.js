const {element,by} = require ('protractor')

class DCRpage{
    
   email = element(by.name("email"))

   password = element(by.name("pass"))

   loginbtn = element(by.name("login"))

   firsteditbox = element(by.model("first"))

   secondeditbox = element(by.model("second"))

   gobtn = element(by.id("gobutton"))

}

exports.DCRpage = DCRpage



