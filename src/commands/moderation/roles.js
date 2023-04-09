const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

//:girl:  :boy: 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("role")
        .setDescription("embed for adding roles"),
    execute: async (client, interaction) => {
        
        desc = "👦 - Dude\n👧 - Dudette"

        const embed = new EmbedBuilder()
            .setTitle("Choose your role")
            .setColor(0xFF1493)
            .setDescription(desc)
            
        const message = await interaction.reply({embeds: [embed], fetchReply: true})
        message.react('👦');
        message.react('👧')
    }
}