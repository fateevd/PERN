import {AUTH_PAGE, MAIN_PAGE, REGISTRATION_PAGE, TODO_CURRENT_PAGE, TODO_PAGE} from "../utils/RouteContsts";
import Main from "../page/Main/Main";
import Auth from "../page/Auth/Auth";
import CurrentPage from "../page/CurrentTodo/CurrentPage";
import Todo from "../page/Todo/Todo";
import Registration from "../page/Registration/Registration";

export const publicPage = [
    {
        path: MAIN_PAGE,
        Component: Main
    },
    {
        path: AUTH_PAGE,
        Component: Auth
    },
    {
        path: REGISTRATION_PAGE,
        Component: Registration
    },
];


export const privatePage = [
    {
        path: MAIN_PAGE,
        Component: Main
    },
    {
        path: TODO_PAGE + "/:id",
        Component: CurrentPage
    },
    {
        path: TODO_PAGE,
        Component: Todo
    },
];