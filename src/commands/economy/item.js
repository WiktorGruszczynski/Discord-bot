const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetchItem = require("../../functions/fetchItem")
const removeItem = require("../../functions/removeItem")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("item")
        .setDescription("item command")
        .addSubcommand(subcommand=>
            subcommand
                .setName("add")
                .setDescription("adds an item to shop")
                .addStringOption(option=>
                    option
                        .setName("name")
                        .setDescription("item name")
                        .setRequired(true))

                .addIntegerOption(option=>
                    option
                        .setName("price")
                        .setDescription("item's price")
                        .setRequired(true))
                .addStringOption(option=>
                    option
                        .setName("emoji")
                        .setDescription("Emoji that will be displayed before item's name")
                        .setRequired(false)))

        .addSubcommand(subcommand=>
            subcommand
                .setName("remove")
                .setDescription("removes an item from a shop")
                .addStringOption(option=>
                    option
                        .setName("name")
                        .setDescription("item's name")
                        .setRequired(true)))

,
    execute: async(client, interaction) =>{
        const {options, guild} = interaction;
        const subcommand = options.getSubcommand();
        const name = options.getString("name");

        const embed = new EmbedBuilder()
            .setTitle("Item")
            .setColor(0xed7b00)
            

        if (subcommand == "add"){
            const price = options.getInteger("price")
            embed.setDescription(`Succesfully added **${name}** to items list`)
            await fetchItem(guild.id, name, price)

        }
        else if (subcommand == "remove"){
            await removeItem(guild, name);
            embed.setDescription(`Succesfully removed **${name}** from items list`)
        }

        await interaction.reply({embeds: [embed], ephemeral: true})

    }
}