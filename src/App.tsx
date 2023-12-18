import './styles.css';
import { CreatePostForm } from '@homework-task/components/CreatePostForm';
import { ListUsers } from '@homework-task/components/ListUsers';
import { ExamplePage } from '@homework-task/pages/ExamplePage';

function App() {
    return (
        <main className="container mx-auto py-20">
            <ListUsers />
            <CreatePostForm />
            <ExamplePage />
        </main>
    );
}

export default App;
