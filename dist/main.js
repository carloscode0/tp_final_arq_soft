"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Biblioteca")
        .setDescription("API")
        .setVersion("1.0")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("apidoc", app, document, {
        swaggerOptions: { filter: true, displayRequestDuration: true },
    });
    await app.listen(process.env.PORT || 3000);
    console.log(`App corriendo en ${await app.getUrl()}/apidoc`);
}
bootstrap();
//# sourceMappingURL=main.js.map