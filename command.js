const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'Create a short url',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKENHERE);


try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands("1373599931394162779"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}