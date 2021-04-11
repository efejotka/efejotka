const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const TRZAR = "Hazırlanıyor rastgele."
const ENZAR = "Roll dice randomly."
const HIZAR = "पासा के यादृच्छिक रोल"

// Sentences
const TRSEN = "🍀 ```Hazırlanıyor!``` 🎲"
const ENSEN = "🍀 ```Rolling Dice!``` 🎲"
const HISEN = "🍀 ```पासा फेंको!``` 🎲"

// Results
const TRSON = "```söylüyorum:``` "
const ENSON = "```Dice Rolled:``` "
const HISON = "```पासा लुढ़का:``` "

// Plugin Start 
if (con.LANG === 'TR') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'hazır', fromMe: true, desc: TRZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, TRSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *al içine* 🎲";
            r_text[1] = "🎲 *görüntülü show* 🎲";
            r_text[2] = "🎲 *al ağzına* 🎲";
            r_text[3] = "🎲 *parmağını amına sok* 🎲";
            r_text[4] = "🎲 *beni ara* 🎲";
            r_text[5] = "🎲 *azdır kendini* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, TRSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'hazır', fromMe: false, desc: TRZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, TRSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *söylüyorum* 🎲";
            r_text[1] = "🎲 *geliyor* 🎲";
            r_text[2] = "🎲 *az kaldı* 🎲";
            r_text[3] = "🎲 *hazırlan* 🎲";
            r_text[4] = "🎲 *hazır mısın* 🎲";
            r_text[5] = "🎲 *hadi yap* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, TRSON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'hazır', fromMe: true, desc: HIZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, HISEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *kilodunu çıkar* 🎲";
            r_text[1] = "🎲 *en sevdiğin kilodu giy* 🎲";
            r_text[2] = "🎲 *ellerini en güzel yerine götür* 🎲";
            r_text[3] = "🎲 *memlerin ne güzel okşar mısın* 🎲";
            r_text[4] = "🎲 *yandın sen amını görebilir miyim* 🎲";
            r_text[5] = "🎲 *twerk yap görüntülü* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, HISON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'hazır', fromMe: false, desc: HIZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, HISEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *götünü görmek istiyorum* 🎲";
            r_text[1] = "🎲 *sakso çek herhangi bir parmağına* 🎲";
            r_text[2] = "🎲 *beni azdır* 🎲";
            r_text[3] = "🎲 *aç ağzını yum gözünü* 🎲";
            r_text[4] = "🎲 *belini görmek istiyorum* 🎲";
            r_text[5] = "🎲 *ayaklarını ovala vidyo* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, HISON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
else {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'roll', fromMe: true, desc: ENZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *ağzını ne kadar açbiliyorsun göster* 🎲";
            r_text[1] = "🎲 *aç ağzını yum gözünü foto* 🎲";
            r_text[2] = "🎲 *ayaklarının fotosunu at* 🎲";
            r_text[3] = "🎲 *hadi em* 🎲";
            r_text[4] = "🎲 *hadi boşalt* 🎲";
            r_text[5] = "🎲 *soyunmak ister misin?* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'roll', fromMe: false, desc: ENZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *bence bugün boşalmalısın* 🎲";
            r_text[1] = "🎲 *bence bugün boşalmalısın* 🎲";
            r_text[2] = "🎲 *hadi parmağını 10 saniye yala* 🎲";
            r_text[3] = "🎲 *en utanç verici şeyi yap* 🎲";
            r_text[4] = "🎲 *10 saniye içinde azdır* 🎲";
            r_text[5] = "🎲 *çıplak bir şekilde görüntülü ara* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
