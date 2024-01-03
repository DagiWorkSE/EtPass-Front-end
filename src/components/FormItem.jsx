import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import Transport from "../api/transport";

import {DropzoneArea} from "material-ui-dropzone";

export const FormItem = ({ item, onChange, answer, onPageUpdate }) => {
  const [currentValue, setCurrentValue] = useState(answer || '');
  const [fileToBeUploaded,setFileToBeUploaded] = React.useState();
  const [fileObjects, setFileObjects] = React.useState([]);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false);


  useEffect(() => {
    validateField(currentValue);
  }, [currentValue]);

  function uploadDocument (data, index){
    Transport.HTTP.uploadPassportImages(data)
    .then((res) => {
      const url = res.data.url;
      // console.log('Upload successful. URL:', url);
      // return url;
      // console.log(item.value, url);
      onPageUpdate(item.value, url);
    })
    .catch((error) => {
      console.error('Error uploading Image:', error);
      alert('Error uploading Image. Please try again.');
      throw error;
    });

}

  const handleChange = async (e) => {
    let value;

    if (item.type === "file") {
      const file = e.target.files[0];
      // value = URL.createObjectURL(file);
      const response = new FormData();
      response.append("file", e.target.files[0]);
      // console.log(response);
      uploadDocument(response, 0);
      // onPageUpdate()
    } else {
      value = e.target.value;
      setCurrentValue(value);
      validateField(value);
      onChange(value, item.value);
    }
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    const fileName = `${formattedDate}_${value}`;
    setFileToBeUploaded(fileName);
  };

  const validateField = (value) => {
    let valid = true;

    switch (item.type) {
      case "text":
      case "number":
      case "tel":
      case "date":
      case "password":
      case "email":
        valid = value.trim() !== "";
        break;
      case "file":
        valid = value instanceof FileList && value.length > 0;
        break;
      case "select":
        valid = value !== "";
        break;
      default:
        valid = true;
    }

    // Handle validation logic here
  };

  return (
    <div>
      {
        <div>
          <Form.Group className="my-3">
          <Form.Label>{item.label}</Form.Label>
          {item.type === "select" ? (
            <>
              <Form.Select
                className="formItems"
                aria-label={item.label}
                onChange={handleChange}
                value={currentValue}
              >
                
                <option value="" disabled>
                  {item.label}
                </option>
                {item.options.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </Form.Select>
            </>
          ) : (
            <>

              {item.type === 'file' ? (
                <>
                {/* <input type="file" className="" /> */}
                  <Form.Control type="file" accept="image/*" onChange={handleChange} />
                {/* <DropzoneArea
                        filesLimit={1}
                        acceptedFiles={['image/*']}
                        maxFileSize={5000000}
                        onChange={(files) => {
                            // console.log(files);
                            files.forEach((e) => {
                              console.log("this is e",e)
                                const response = new FormData();
                                response.append("file", e, e.name);
                                console.log(response);
                                uploadDocument(response, 0);
                            });
                            files.forEach((file) => {
                                const currentDate = new Date();
                                const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
                                const fileName = `${formattedDate}_${file.name}`;
                                setFileToBeUploaded(fileName);
                             });
                            // var oldFile =[...filesToBeUploaded];
                            // oldFile.push(files);
                            // setFilesToBeUploaded(oldFile);
                            // setIndexForUpload(idx);
                            
                        }}
                       
                        onDelete={(deleteFileObj) => {
                            const newFileObjects = fileObjects.filter((e) => e !== deleteFileObj);
                            setFileObjects(newFileObjects);
                        }}
                    /> */}
                </>
                
                // <Form.Control type={item.type} id={item.label} onChange={handleChange} name={item.value} />

              ) : (
                <Form.Control
                  className="formItems"
                  type={item.type}
                  placeholder={item.label}
                  id={item.label}
                  onChange={handleChange}
                  value={currentValue}
                  name={item.value}
                />
              )}
            </>
          )}
          </Form.Group>
        </div>
      }
    </div>
  );
};

