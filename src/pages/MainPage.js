import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";



const MainPage = () => {

    

    return ( 

        <BasicLayout>
            <h2>MainPage</h2>


            <TodoList></TodoList>
            <TodoInput></TodoInput>
        </BasicLayout>

     );
}
 
export default MainPage;