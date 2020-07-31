const { createElement, PureComponent } = require('react')
const { init } = require('../chart')
const { divide } = require('lodash')
//const { MyModal } = require('./myModal')

class OrgChart extends PureComponent {
  render() {
    const { id } = this.props

    const newDiv = createElement('div', {
      id,
    });

    //const myModal = <MyModal/> THIS THROWS AN ERROR, WONT COMPILE
    // bootstrap alternative for modal
    // const myModal = createElement('MyModal', {
    //   id: 'myModal',
    //   style: {
    //     backgroundColor: '#fafafa',
    //     width: 500,
    //     height: 500,
    //     position: 'absolute',
    //     borderRadius: 5,
    //     border: '1px solid #473c3c',
    //   },
    // });
    // return outerChart instead of newDiv
    // const outerChart = createElement('div', {
    //   id: "OuterChart",
    //   height: 1000,
    //   padding: 15,
    //   className: 'App-contentWrapper',
    // },
    // [myModal, newDiv]);
    return newDiv;
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
