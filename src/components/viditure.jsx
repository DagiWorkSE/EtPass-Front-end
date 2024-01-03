// src/components/VideoRecording.js
import Transport from "../api/transport";
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const VideoRecording = ({ onRecordingComplete, setViditure }) => {
  const videoRef = useRef(null);
  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showReplayButton, setShowReplayButton] = useState(false);

  const uploadViditure = (data) => {
    console.log('Uploading data:', data);  
    return Transport.HTTP.uploadPassportViditure(data)
      .then((res) => {
        // Assuming your server response contains a property named 'url'
        const url = res.data.url;
        console.log('Upload successful. URL:', url);
        return url; // Return the URL
      })
      .catch((error) => {
        console.error('Error uploading video:', error);
        alert('Error uploading video. Please try again.');
        throw error; // Re-throw the error to propagate it
      });
  };
  
  const startRecording = async () => {
    chunks.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.current.push(event.data);
        }
      };
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(chunks.current, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(recordedBlob);
        setIsRecording(false);
        setShowReplayButton(true);
        const formData = new FormData();
        formData.append("file", recordedBlob, "recording.webm");
        setViditure(recordedBlob);
        console.log('1 content:', [...formData.entries()]);
        // onRecordingComplete(videoUrl);
        videoRef.current.src = videoUrl;
      };
      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing camera and microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;  
      // upload video
      // const recordedBlob = new Blob(chunks.current, { type: 'video/webm' });
      // const formData = new FormData();
      // formData.append("file", recordedBlob, "recording.webm");
      // setViditure(recordedBlob);
      // console.log('1 content:', [...formData.entries()]);
      // uploadViditure(formData)
      // .then((url) => {
      //   console.log('Received URL:', url);
      //   // Do something with the URL
      //   chunks.current = []; // Reset chunks after successful upload
      //   console.log('Upload successful.');
      // })
      // .catch((error) => {
      //   console.error('Error uploading video:', error);
      //   alert('Error uploading video. Please try again.');
      // });
    }
  };

  const playRecording = () => {
    const recordedBlob = new Blob(chunks.current, { type: 'video/webm' });
    const videoUrl = URL.createObjectURL(recordedBlob);
    videoRef.current.srcObject = null;
    videoRef.current.src = videoUrl;
    videoRef.current.play();
  };

  const reRecord = () => {
    chunks.current = [];
    setIsRecording(false);
    setShowReplayButton(false);
    // Resetting the video source to clear the displayed video
    videoRef.current.src = null;
    videoRef.current.srcObject = null;
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <div className="border p-3">
            <video ref={videoRef} width="100%" height="100%" autoPlay muted />
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          {!isRecording && !showReplayButton && (
            <div className="mb-3">
              <Button className='text-dark' onClick={startRecording} variant="outline-primary">
                Start Recording
              </Button>
            </div>
          )}
          {isRecording && (
            <div className="mb-3">
              <Button className='text-dark' onClick={stopRecording} variant="outline-danger">
                Stop Recording
              </Button>
            </div>
          )}
          {!isRecording && showReplayButton && (
            <>
              <div className="mb-3">
                <Button className='text-dark' onClick={playRecording} variant="outline-primary">
                  Replay Recording
                </Button>
              </div>
              <div className="mt-2">
                <Button className='text-dark' onClick={reRecord} variant="outline-primary">
                  Re-record
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoRecording;
