const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("games")
        .setDescription("embed for adding roles"),
    execute: async (client, interaction) => {
        
        
        const react = ['1092012521629700119','1092011049852616744','1092010759183138856','1092011777304309780','1092013026275766273']

        lines = ['<:amongus:1092012521629700119> - <@&1092504398602698752>',
        '<:csgo:1092011049852616744> - <@&1092504447013359716>',
        '<:lol:1092010759183138856> - <@&1092505028968853586>',
        '<:minecraft:1092011777304309780> - <@&1092504524184359013>',
        '<:valorant:1092013026275766273> - <@&1092504474418942054>']

        desc = lines.join('\n')

        desc += "\n\n`Warning` These roles allow for pinging on channel <#1092508046980296714>"

        const embed = new EmbedBuilder()
            .setTitle("Games")
            .setDescription(desc)
            

        const message = await interaction.reply({embeds: [embed], fetchReply: true})
        for (const reaction of react)
        {
            message.react(reaction)
        }
    }
}