const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'classic',
    category : 'nitroo',
    description : 'Er is een kans dat je een echte nitro link krijgt, elke 100 keer is er een geldige!',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.author.send(`Zoeken...`)
        const embed = new MessageEmbed()
            .setTitle('Gevonden!!')
            .setDescription(`De link naar jou nitro: https://discord.gift/csasjfD893kSDadn39SD`)
            await message.author.send(embed)

    }
}