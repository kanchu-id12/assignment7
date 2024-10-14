import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

class VideoItemDetails extends Component {
  state = {
    videoObj: [],
  }

  componentDidMount() {
    this.allVideoItemDetailsapis()
  }

  allVideoItemDetailsapis = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const upateVideoDetails = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({videoObj: upateVideoDetails})
    }
  }

  renderSuccessVideoItemDetailsView = () => {
    const {videoObj} = this.state
    const {channel} = videoObj
    console.log(channel)
    const {name, subscriberCount, profileUrl} = channel
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

  render() {
    return (
      <>
        <Header />
        {this.renderSuccessVideoItemDetailsView()}
      </>
    )
  }
}
export default VideoItemDetails
