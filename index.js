const util = require('util');
const exec = util.promisify(require('child_process').exec);
const cron = require('node-cron');

 
cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  require('dns').resolve('www.google.com', function(err) {
    if (err) {
       console.log("No connection");
       reboot();
    } else {
         console.log("Connected");       
    }
  });
});

const reboot = async ()=> {
    await exec("npm run reboot")
}

