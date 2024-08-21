import React, { useState } from 'react';
import type { UploadProps } from 'antd';
import { message, Upload, Progress } from 'antd';
import './input.scss';
import { FileAttatchment, FIleIcon } from 'assets/icons';
const { Dragger } = Upload;

interface FileInputProps {
  handleChange: (file: FormData) => void;
}

const FileInput: React.FC<FileInputProps> = ({ handleChange }) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null); // Initial value for demonstration
  const [fileInfo, setFileInfo] = useState<{ name: string, size: number } | null>(null);

  const simulatedUpload = (file: File) => {
    const fileSizeKB = Math.round(file.size / 1024);
    setFileInfo({ name: file.name, size: fileSizeKB });
    console.log("Starting simulated upload");

    const totalSize = fileSizeKB;
    const uploadSpeed = 50; // KB/s
    const totalUploadTimeMs = (totalSize / uploadSpeed) * 1000;
    const updateIntervals = 100; // ms

    let progress = 0;

    if(fileSizeKB > 3000 ){
      message.error("File size exceeds 3MB")
      // onError?.("file size exceeds limit")
    }
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += (uploadSpeed * (updateIntervals / 1000)) / totalSize * 100;
        setUploadProgress(Math.min(progress, 100));
      } else {
        clearInterval(interval);
        setUploadProgress(null);
        message.success(`${file.name} file uploaded successfully.`);
      }
    }, updateIntervals);
  };

  const props: UploadProps = {
    name: 'file',
    multiple: false,

    beforeUpload(file) {

      const fileSizeMB = file.size / 1024 / 1024; // Convert bytes to MB
      if (fileSizeMB > 3) {
        // File size exceeds 3MB
        message.error(`File size exceeds 3MB. File size: ${Math.round(fileSizeMB)}MB`);
        return false; 
      }

      simulatedUpload(file);

      const formData = new FormData();
      
      handleChange(formData);
      formData.append("file", file);

      // Prevent the default upload behavior
      return false;
    }
  };

  return (
    <div className="fileInput max-w-md">
      {uploadProgress !== null ? (
        <div className='progress-wrapper border-2 border-[#0094FF]'>
          <div className='text-wrap flex gap-5 items-center'>
            <p className="ant-upload-drag-icon">
              <FIleIcon />
            </p>
            <div>
              <p className='text-[#A3A8B0] flex-1 break-words text-wrap max-w-sm text-ellipsis whitespace-nowrap overflow-hidden'>
                {fileInfo?.name}
              </p>
              <p className='text-[#A3A8B0]'>
                {fileInfo?.size}KB
              </p>
            </div>
          </div>
          <div className='text-wrap ant-upload-text h-2 flex-1 my-2'>
            <Progress
              percent={Math.round(uploadProgress)}
              status="active"
              showInfo={true}
              strokeColor="#1890ff"
            />
          </div>
        </div>
      ) : (
        <Dragger {...props}>
          <div>
            <p className="ant-upload-drag-icon">
              <FileAttatchment />
            </p>
            <div className="text-wrap">
              <p className="ant-upload-text text-white text-left">
                Attach or drag/drop your documents
              </p>
              <p className="ant-upload-hint text-white text-left">
                .PDF, .DOCX, PNG, JPG (max. 2mb)
              </p>
            </div>
          </div>
        </Dragger>
      )}
    </div>
  );
};

export default FileInput;
