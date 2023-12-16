import { useUsers } from './hooks/useUsers';
import './styles.css';

function App() {
    const { status, data } = useUsers();
    console.log('data', data);
    console.log('status', status);
    return <main></main>;
}

export default App;
