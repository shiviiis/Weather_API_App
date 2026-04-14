const App = require("./app");
App.listen(process.env.PORT,()=>{
    console.log(`Server stared at ${process.env.PORT}`);
})