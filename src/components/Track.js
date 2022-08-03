import React, {useState, useEffect, useRef} from 'react'
import {gsap} from "gsap";
import play from '../images/play_filled.png'
import pause from '../images/pause_filled.png'
import '../styles/Track.css'

export default function Track(props) {
  const [isPlaying, _setIsPlaying] = useState(false)
  const [waveformWidth, _setWaveformWidth] = useState(0)
  const [audioLength, setAudioLength] = useState(0)
  const audioRef = useRef()
  const waveformWidthRef = useRef()
  const tween1Ref = useRef()
  const tween2Ref = useRef()
  const trackCanvasContainerRef = useRef()
  const isPlayingRef = useRef()
  function setIsPlaying(data) {
    isPlayingRef.current = data
    _setIsPlaying(data)
  }
  // const [tween1, setTween1] = useState(null)
  // const [tween2, setTween2] = useState(null)
  // const [timeline, setTimeline] = useState(gsap.timeline({repeat: 0}))
  // const [playPosition, setPlayPosition] = useState(0)
  const canvasRef = useRef()
  const playedPortionRef = useRef()
  function onClickPlayPause() {
    console.log(waveformWidth)
    const audio = document.getElementById(props.id)
    if (audio) {
      if (isPlaying) {
        setIsPlaying(false)
      } else {
        setIsPlaying(true)
      }
    }
  }

  useEffect(() => {
    console.log('audio ref', audioRef)
    if (audioRef.current) {
      console.log('audio ref current')
      const length = audioRef.current.duration
      console.log('length', length)
      setAudioLength(length)
    }
  }, [audioRef])

  function skipTo(time) {
    const audio = document.getElementById(props.id)
    audio.currentTime = time
  }

  function onMouseUp(event, canvas) {
    const audio = document.getElementById(props.id)
    if (audio.currentTime === 0) {
      setIsPlaying(true)
    } else {
      let rect = canvas.getBoundingClientRect()
      let x = event.clientX - rect.left
      console.log("Coordinate x: " + x)
      const container = document.getElementById('track-canvas-container')
      const containerWidth = container.clientWidth
      const ratioOfCanvas = x / containerWidth
      const skipTime = ratioOfCanvas * audio.duration
      console.log('skip time', skipTime)
      skipTo(skipTime)
      const playedPortion = playedPortionRef.current
      gsap.killTweensOf(playedPortion);
      tween1Ref.current = gsap.set(playedPortion, {width: `${ratioOfCanvas * 100}%`, duration: 0, ease: 'none'})
      console.log('is playing?', isPlaying)
      if (isPlayingRef.current) {
        movePlayHead()
      }
    }
  }

  function resetPlayHead() {
    const audio = document.getElementById(props.id)
    audio.currentTime = 0
    setIsPlaying(false)
    // timeline.clear()
    const playedPortion = playedPortionRef.current
    tween1Ref.current = gsap.to(playedPortion, {width: '0%', duration: 0, ease: 'none'})
  }

  function setWaveformWidth() {
    const newWaveFormWidth =
      trackCanvasContainerRef && trackCanvasContainerRef.current ?
        trackCanvasContainerRef.current.clientWidth : 0
    _setWaveformWidth(newWaveFormWidth)
    waveformWidthRef.current = newWaveFormWidth
  }

  useEffect(() => {
    console.log('canvas ref', canvasRef, canvasRef.current)
    window.addEventListener('resize', setWaveformWidth)
    setWaveformWidth()
    // canvasRef.current.addEventListener('onmouseup', (e) => {
    //   onMouseUp(e, canvasRef.current)
    // })
    canvasRef.current.onmouseup = (e) => {
      onMouseUp(e, canvasRef.current)
    }
    const audio = document.getElementById(props.id)
    audio.addEventListener('ended', resetPlayHead)
  }, [])

  function movePlayHead() {
    const audio = document.getElementById(props.id)
    const playedPortion = playedPortionRef.current
    const duration = audio.duration - audio.currentTime
    tween2Ref.current = gsap.to(playedPortion, {width: '100%', duration: duration, ease: 'none'})
  }

  useEffect(() => {
    const audio = document.getElementById(props.id)
    console.log('current position: ', audio.currentTime)
    if (isPlaying) {
      movePlayHead()
      audio.play()
    } else {
      audio.pause()
      if (tween2Ref.current) {
        tween2Ref.current.pause()
      }
    }
  }, [isPlaying])
  
  return (
    <div className="track">
      <div className="track-left">
        <img src={props.image} alt='' />
      </div>
      <div className="track-right">
        <div className="track-top">
          <audio
            id={props.id}
            src={props.source}
            ref={audioRef}
          />
          <button
            className="play-pause"
            onClick={onClickPlayPause}
          >
            <img
              className='play-pause-img'
              alt={isPlaying ? 'pause' : 'play'}
              src={isPlaying ? pause : play}
              // style={isPlaying ? {
              //   filter: `invert(72%) sepia(20%) saturate(4956%) hue-rotate(154deg) brightness(99%) contrast(100%)`
              // } : {}}
            />
          </button>
          <div className="track-info">
            <span className="track-title">{props.name}</span>
            <div className='track-meta-data'>
              <span>{props.genre}</span>
              <span>{props.keyCenter}</span>
              <span>{props.tempo + 'bpm'}</span>
            </div>
          </div>
        </div>
        <div className="track-middle">
          <div
            id="track-canvas-container"
            ref={trackCanvasContainerRef}
          >
            <img
              className="unplayed-wave-img"
              src={props.waveImg} alt=''
            />
            <div
              ref={playedPortionRef}
              className='track-canvas-played-portion'
            >
              <img
                className="played-wave-img"
                src={props.waveImg} alt=''
                style={{
                  width: `${waveformWidthRef.current || 0}px`
                }}
              />
            </div>
            <canvas
              className="track-canvas"
              id={props.id + '-canvas'}
              height="20"
              ref={canvasRef}
            />
          </div>
        </div>
        <div className="track-bottom">
          <div className="tags">
            {props.tags.map((tag, i) => {
              return (
                <span key={props.id + '-tag-' + i}>
                  {'#' + tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
