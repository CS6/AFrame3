import React, { useState, useEffect, useRef } from 'react';
import {Button, Form, Input, Modal, Upload} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const RegistrationForm = (props) => {
    const {
        form: { getFieldDecorator , validateFields},
        previewData
    } = props;

    const [filesList, setFilesList] = useState([]);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    // 限制图片的格式，size，分辨率
    const handleBeforeUpload = (file, FileList) => {
        const isJPG = file.type === 'image/jpeg';
        const isJPEG = file.type === 'image/jpeg';
        const isGIF = file.type === 'image/gif';
        const isPNG = file.type === 'image/png';
        if (!(isJPG || isJPEG || isGIF || isPNG)) {
            Modal.error({
                title: '只能上传JPG 、JPEG 、GIF、 PNG格式的图片~'
            });
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Modal.error({
                title: '超过2M限制，不允许上传~'
            });
            return false;
        }
        return (isJPG || isJPEG || isGIF || isPNG) && isLt2M && checkImageWH(file);
    };

    // 返回一个promise：通过检测则返回reslove；失败则返回reject，并阻止图片上传
    const checkImageWH = (file)=> {
        const value =  file;
        return new Promise((resolve, reject) => {
            const filereader = new FileReader();
            filereader.onload = (e) => {
                const src = e.target.result;
                const image = new Image();
                image.onload = () => {
                    value.width = image.width;
                    value.height = image.height;
                    resolve();
                };
                image.onerror = reject;
                image.src = src;
            };
            filereader.readAsDataURL(value);
        });
    };

//     const handleChange = (info) => {
//         console.log(info.fileList);
//         console.log(info.file);
//         setFilesList(info.fileList);
//     };
    const handleChange = ({ file, fileList }) => {
        console.log(JSON.stringify(file)); // file 是当前正在上传的 单个 img
        console.log(JSON.stringify(fileList)); // fileList 是已上传的全部 img 列表
        // 【重要】将 图片的base64替换为图片的url。 这一行一定不会能少。
        // 图片上传成功后，fileList数组中的 thumbUrl 中保存的是图片的base64字符串，这种情况，导致的问题是：图片上传成功后，点击图片缩略图，浏览器会会卡死。而下面这行代码，可以解决该bug。
        fileList.forEach(imgItem => {
          if (imgItem && imgItem.status == 'done' && imgItem.response && imgItem.response.imgUrl) {
            imgItem.thumbUrl = imgItem.response.imgUrl;
          }
        });
         setFilesList(fileList);
      };

    const handleCancel = () => {
        setPreviewVisible(false);
    };

    const handlePreview = (file) => {
        const imageUrl = file.url || file.thumbUrl || '';
        setPreviewImage(imageUrl);
        setPreviewVisible(true);
    };

    return (
   
              <div  style={{ width: 100,height:100 }}>
                    {getFieldDecorator('upload',
                        {   valuePropName: 'fileList',
                            getValueFromEvent: normFile
                        }
                    )(
                        <Upload
                            action="/api/image/upload/"
                            data={file => ({
                                image_file: file
                            })}
                            listType="picture-card"
                            fileList={filesList}
                            onPreview={handlePreview}
                            beforeUpload={handleBeforeUpload}
                            onChange={handleChange}
                            >
                            {
                                filesList.length >= 6 ? null : <Button>
                                    {/* <Icon type="upload"/>  */}
                                    <SettingOutlined key="setting" />,
                                    Click to upload
                                </Button>
                            }
                        </Upload>
                    )}
                <div/>
                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <div/>
        </div>);
};
export default RegistrationForm;