import { defineConfig } from "cypress";
import { configurePlugin } from 'cypress-mongodb';

export default defineConfig({
  env: {
    mongodb: {
        uri: 'mongodb://ftduser:ftdPassw0rd@10.7.55.55:27017/?authSource=admin&readPreference=primary&directConnection=true&ssl=false',
        database: 'PLUSOrderScheduling',
        collection: 'ScheduleSalesOrder',
    }
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
  },
});
