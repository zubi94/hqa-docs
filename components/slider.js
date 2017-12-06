import React, { Component } from 'react'
import Slide from './slide'

class Slider extends Component {
  constructor() {
    super()
    this.state = {
      background: [
        {
          imageUrl: `${IMAGE_ASSETS_URL}/dr_hamed/praying.jpg`
        }
      ],
      currentImg: 0,
      interval: null
    }
  }

  componentDidMount() {
    this.setState({
      interval: window.setInterval(this.changeCurrent.bind(this), 3000)
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  changeCurrent() {
    let currentImg = this.state.currentImg
    let lastImg = this.state.background.length - 1

    if (currentImg !== lastImg) {
      currentImg++
      this.setState({ currentImg: currentImg })
    } else {
      currentImg = 0
      this.setState({ currentImg: currentImg })
    }
  }

  render() {
    return (
      <div className="slideshow">
        <Slide
          background={this.state.background}
          current={this.state.currentImg}
        >
          <div>Learn More</div>
        </Slide>
        <style jsx>{`
          .slideshow {
            overflow: hidden;
            z-index: -1;
          }
        `}</style>
      </div>
    )
  }
}

export default Slider
