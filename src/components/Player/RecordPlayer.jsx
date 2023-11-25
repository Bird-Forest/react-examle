import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './RecordPlayer.styled';

export class RecordPlayer extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url === this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              //   метод реакт-плейер
              onReady={() => this.setState({ isVideoLoaded: true })}
              onError={console.log('Error')}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

// Set width and height to 100% and wrap the player in a fixed aspect ratio box to get a responsive player:

// class ResponsivePlayer extends Component {
//   render () {
//     return (
//       <div className='player-wrapper'>
//         <ReactPlayer
//           className='react-player'
//           url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
//           width='100%'
//           height='100%'
//         />
//       </div>
//     )
//   }
// }
