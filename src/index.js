import express from 'express'
import lumie from 'lumie'
import bodyParser from 'body-parser'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import exceptionHandler from './middlewares/exception-handler.js'
import { database } from './config/database.js'
;(async () => {
    /**
     * initiate the express server instance
     */
    const app = express()

    dotenv.config()
    /**
     * parse the form data from body using body parser
     */
    app.use(
        bodyParser.urlencoded({
            limit: '100mb',
            extended: true,
        })
    )
    /**
     * enable cors for express app
     */
    app.use(
        cors({
            origin: true,
        })
    )
    /**
     * connect to the database wait for the connection then proceed
     */
    await database()
    /*
     * parse the json from body using body parser
     */
    app.use(
        bodyParser.json({
            limit: '100mb',
        })
    )

    /*
     * to access the public image
     */

    /**
     * Bind routes with express app
     */
    lumie.load(app, {
        preURL: 'api',
        verbose: true,
        ignore: ['*.spec', '*.action', '*.test'],
        controllers_path: path.join(__dirname, 'controllers'),
    })

    /**
     * Default exception handing
     */
    app.use(exceptionHandler)

    app.listen(process.env.PORT || 3030, () => {
        // eslint-disable-next-line no-console
        console.log(' App is running on ', process.env.PORT || 3030)
    })
})()
