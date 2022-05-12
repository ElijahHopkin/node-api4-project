require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 5001;

if(PORT == null) {
     console.error('no port set')
}else{   
    server.listen(PORT, () => {
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
    })
}