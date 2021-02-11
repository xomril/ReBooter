const dotenv = require('dotenv');
dotenv.config();

const { openBrowser, goto, textBox, into, $, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        
        await goto(process.env.ROUTER_IP);
        await write( process.env.ROUTER_USER, into(textBox({name:"userName"})));
        await write(process.env.ROUTER_PASS, into(textBox({name:"origUserPwd"})));
        await click("submit");
        await click("Advanced");
        await click($("#system"));
        await click($("#reboot"));
        await click("submit");        
       console.log("rebooted")
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
