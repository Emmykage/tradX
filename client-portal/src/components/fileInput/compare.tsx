import React, { useState, useEffect } from 'react';
import type { UploadProps } from 'antd';
import { message, Upload, Progress } from 'antd';
import './input.scss';
import { FileAttatchment, FIleIcon } from 'assets/icons';
const { Dragger } = Upload;

interface FileUploaderProps {
  setData: React.Dispatch<React.SetStateAction<{identity: string, address: string}>>;
  label?: string;
  handleChange: (value: string) => void;
}

const FileInput: React.FC<FileUploaderProps> = ({ handleChange }) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string, size: number } | null>(null);

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    onChange(info) {
      console.log('File info:', info); // Check the structure here
      const { status, percent, size = 0, name } = info.file;

      if (status === 'uploading') {
        setFileInfo({ name, size: size as number });
        setUploadProgress(percent ?? null);
        console.log('Uploading:', uploadProgress);
      } else if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setUploadProgress(null);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        setUploadProgress(null);
      }
    },
    onDrop(e) {
      console.log("Files have been dropped");
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload(file) {
      handleChange(file.name);
      return false;
    }
  };

  useEffect(() => {
    console.log('Upload Progress Updated:', uploadProgress);
  }, [uploadProgress]);

  return (
    <div className="fileInput">
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
