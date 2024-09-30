const { drizzle } = require("drizzle-orm/postgres-js")
const { migrate } = require("drizzle-orm/postgres-js/migrator")
const postgres = require("postgres")


require("dotenv").config({path:".env"})

const PushMigration = async ()=>{
    const migrationClient = postgres(process.env.DB_CONNECTION_STRING, {max:1,})
     const migrationDb = drizzle(migrationClient)
     await migrate(migrationDb , {
        migrationsFolder : "src/db/migrations/drizzle"
     })  
     await migrationClient.end()
    }
PushMigration()