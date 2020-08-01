import React,  {useState, useEffect} from 'react';
import logo from './logo.svg'
import './App.css';
import StudentsTable from "./Components/StudentsTable";
import SubjectsTable from "./Components/SubjectsTable";

class App extends React.Component {
    render() {
        return (
            <div>
                <StudentsTable />
                <SubjectsTable />
            </div>
        );
    }
}
/*function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
        fetch('http://localhost:8080/student/1/?format=json')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                // Примечание: Обрабатывать ошибки необходимо именно здесь
                // вместо блока catch(), чтобы не пропустить
                // исключения из реальных ошибок в компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        console.log(items)
        return (
            <ul>
                {items.map(item => (
                    <li key={item.name}>
                        {item.name} {item.surname}
                    </li>
                ))}
            </ul>
        );
    }
}*/

    /*constructor() {
        super();
        this.state = {
            activeGroup: 0,
            students: null
        };
    }
    componentDidMount() {
        Request.getStudents().then((students) => {
            this.setState({students: students});
        });
    }
    render() {
        return (
            <div className="App">
        {this.state.students ? <JournalTable
            students={this.state.students[this.state.activeGroup]}/> : null}
        <button onClick={() => {
            this.setState({activeGroup: 0});
        }}>Группа 1</button>
        <button onClick={() => {
            this.setState({activeGroup: 1});
        }}>Группа 2</button>
        <button onClick={() => {
            this.setState({activeGroup: 2});
        }}>Группа 3</button>
        </div>
        );
    }*/


/*class JournalTable extends Component {
    render() {
        return (
            <table bordered>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>ПрИС</th>
                    <th>СИИ</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student, index) => {
                                return <tr>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.second_name}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        )
    }
}*/

/*const API_KEY = "82b797b6ebc625032318e16f1b42c016";

class App extends Component {



    getStudents = async (e) => {
        e.preventDefault();
        //const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=${API_KEY}&units=metric`)
        const api_url = await fetch(`http://localhost:8080/student/show_all`)
        const data = await api_url.json();
        console.log("da")
        console.log(data);
        return false;
    }

  render() {
    return (
        <div className="App">
            <Request myMethod={this.getStudents}/>
        </div>
    );
  }
}*/

export default App;
