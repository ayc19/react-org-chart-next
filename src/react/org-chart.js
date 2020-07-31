const { createElement, PureComponent } = require('react')
const { init } = require('../chart')
const { divide } = require('lodash')

class OrgChart extends PureComponent {
  render() {
    console.log("in org-chart");
    const { id } = this.props

    const newDiv = createElement('div', {
      id,
    });

    const myModal = createElement('div', {
      id: 'myModal',
      style: {
        backgroundColor: '#fafafa',
        width: 500,
        height: 500,
        position: 'absolute',
        borderRadius: 5,
        border: '1px solid #473c3c',
      },
    });
    console.log("myModal: ", myModal);
    const outerChart = createElement('div', {
      id: "OuterChart",
      height: 1000,
      padding: 15,
      className: 'App-contentWrapper',
    },
    [myModal, newDiv]);
    return outerChart;
  }

  static defaultProps = {
    id: 'react-org-chart'
  }

  componentDidMount() {
    const { id, tree, ...options } = this.props

    init({ id: `#${id}`, data: tree, ...options })
  }
}

module.exports = OrgChart
