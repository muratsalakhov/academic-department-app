import React from 'react';

class UserPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            student: ''
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/group/show_all`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        groups: result,
                        student: this.props.studentId
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выберите ваш любимый вкус:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Грейпфрут</option>
                        <option value="lime">Лайм</option>
                        <option value="coconut">Кокос</option>
                        <option value="mango">Манго</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }

}
export default UserPanel;