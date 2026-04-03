"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_route_1 = __importDefault(require("./router/users.route"));
const foodCategory_route_1 = __importDefault(require("./router/foodCategory.route"));
const foodOrder_route_1 = __importDefault(require("./router/foodOrder.route"));
const foods_route_1 = __importDefault(require("./router/foods.route"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(foods_route_1.default);
app.use(users_route_1.default);
app.use(foodCategory_route_1.default);
app.use(foodOrder_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
