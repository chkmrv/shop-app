import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Spinner.scss'

class Spinner extends React.Component {
    static propTypes = {
      visible: PropTypes.bool,
      inverse: PropTypes.bool,
      inline: PropTypes.bool,
      size: PropTypes.string,
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string
    }

    static defaultProps = {
      visible: true,
      inverse: false,
      inline: false,
      size: '28px',
      top: '40vh',
      left: 'calc(50% - 12px)',
      right: 'auto'
    }

    resolveStyle = () => {
      let style = {
        width: this.props.size,
        height: this.props.size
      }
      if (!this.props.inline) {
        style = {...style,
          top: this.props.top,
          left: this.props.left,
          right: this.props.right}
      }
      return style
    }

    render () {
      return (
        this.props.visible
          ? (
            <div
              className={classnames('spinner', {inverse: this.props.inverse}, {inline: this.props.inline})}
              style={this.resolveStyle()}
            >
              <div
                className='spinner-inner'
                style={{width: this.props.size, height: this.props.size}}
              />
            </div>
          )
          : null
      )
    }
}

export default Spinner
