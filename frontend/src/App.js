import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
    const [word, setWord] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('word ', word);
    };

    console.log(word);

    return (
        <section>
            <Header title="Image Gallery" />
            <SearchBar
                word={word}
                setWord={setWord}
                handleSubmit={handleSearchSubmit}
            />
        </section>
    );
}

export default App;
