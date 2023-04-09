const Item = require("../schemas/item")

module.exports = async (guild, name) => {
    return await Item.findOneAndDelete({guildId: guild.id, name: name});
}