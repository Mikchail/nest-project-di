  
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);
        app.enableCors()
        console.log(1231231312)
        await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()