//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~m2xDSJAS#cXaReUMFXZBxDu0kZ8ck_cgjIEBgC2_-AUY-3go8qwM' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'❌G҉O҉D҉W҉I҉N҉❌' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'2349012464012' //ur owner number
global.ownername = '❌G҉O҉D҉W҉I҉N҉❌' //ur owner name
global.websitex = "https://www.tiktok.com/@.godwin_codm?_t=ZM-8x0LA6n6yKU&_r=1" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '❌'
global.wm = "❌G҉O҉D҉W҉I҉N҉❌"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"❌G҉O҉D҉W҉I҉N҉❌" //enter your stickers author name here
global.author = "💖r"
global.creator = "2349012464012@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||','
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'private' //set bot public/private
const antilinkgc = process.env.ANTILINK_GC || 'TRUE';
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = process.env.GROUP_EVENT || 'false' //show update messages in group chat
//msg
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'ONLY GODWIN HAS ACESS TO IT<\>',
    admin: '❌G҉O҉D҉W҉I҉N҉❌ is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Success •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
