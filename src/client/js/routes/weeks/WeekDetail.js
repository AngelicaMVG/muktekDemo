import React, { Component } from 'react';
import req from 'superagent';
import glamorous from 'glamorous';
import Button from '../../shared/button/Button';
import Section from '../../shared/grid/Section';
import MyLink from '../../shared/link/MyLink';

const WeekListWrapper = glamorous.div({
  backgroundColor: 'white',
  marginTop: '15%',
  padding: 30,
  marginBottom: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'space-around',
  justifyContent: 'space-around',
  height: 180
});

export default class WeekDetail extends Component {
  state = {
    week: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    req
      .get(`/api/students/${params.studentId}/weeks/${params.id}`)
      .then(res => {
        this.setState({
          ...this.state,
          week: { ...res.body }
        });
      });
  }

  handleChange = (id, e) => {
    const { params } = this.props.match;
    req
      .put(
        `/api/students/${params.studentId}/weeks/${params.id}/days/${id}/edit`
      )
      .send({ [e.target.name]: e.target.checked })
      .then(res => {
        console.log(res.body);
      });
    console.log(id, e.target.name, e.target.checked);
  };

  render() {
    const { week } = this.state;
    return (
      <div>
        <MyLink to={`/students/${week.studentId}/weeks`}>
          <Button style={{ marginTop: '5%', backgroundColor: 'blue' }}>
            Detalle de Estudiante
          </Button>
        </MyLink>
        <WeekListWrapper key={week.id}>
          <div>
            {`Semana ${week.week}`}
            <div style={{ marginTop: 25 }}>Tarea</div>
            <div style={{ marginTop: 25 }}>Asistencia</div>
          </div>
          {week.days &&
            week.days.map(day => (
              <div key={day.id}>
                <div>{day.dayName}</div>
                <div>
                  <input
                    style={{
                      color: 'green',
                      fontSize: '25px',
                      marginTop: 25,
                      marginLeft: 15
                    }}
                    type="checkbox"
                    onChange={e => this.handleChange(day.id, e)}
                    name="homework"
                    defaultChecked={!!day.homework}
                  />
                </div>
                <div>
                  <input
                    style={{
                      color: 'green',
                      fontSize: '25px',
                      marginTop: 25,
                      marginLeft: 15
                    }}
                    type="checkbox"
                    onChange={e => this.handleChange(day.id, e)}
                    name="attendance"
                    defaultChecked={!!day.attendance}
                  />
                </div>
              </div>
            ))}
        </WeekListWrapper>
      </div>
    );
  }
}
