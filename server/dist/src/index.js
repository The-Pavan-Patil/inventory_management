"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
// routes import
// config
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
// ROUTES 
app.use('/dashboard', dashboardRoutes_1.default);
//Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
