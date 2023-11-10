import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const NewsItem = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    const [iconChanged, setIconChanged] = useState(false);
    const [isVibrating, setIsVibrating] = useState(false);

    const CopyUrl = () => {
        navigator.clipboard
            .writeText(props.url)
            .then(() => {
                console.log('URL copied to clipboard: ' + props.url);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    };

    const handleClick = () => {
        setIconChanged(!iconChanged);
        setIconChanged(!iconChanged);
        setIsVibrating(true);
        setTimeout(() => {
            setIsVibrating(false);
        }, 200);
    };

    const { title, description, imgUrl, url } = props;

    return (
        <div className="my-3">
            <div className="card" data-tilt>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>

                    <div onClick={CopyUrl}>
                        <ContentCopyIcon
                            sx={{
                                fontSize: '2.2rem',
                                position: 'absolute',
                                left: '5%',
                                bottom: '5%',
                                cursor: 'pointer',
                                color: 'rgba(255, 255, 255, 0.6)',
                            }}
                        />
                    </div>

                    <Button
                        variant="contained"
                        href={url}
                        target="_blank"
                        sx={{
                            position: 'absolute',
                            bottom: '5%',
                            margin: 'auto',
                            left: '28%',
                            color: 'white',
                            borderRadius: '15px',
                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        }}
                    >
                        Read More
                    </Button>

                    <div>
                        {iconChanged ? (
                            <ThumbUpAltIcon
                                onClick={handleClick}
                                sx={{
                                    fontSize: '2.4rem',
                                    cursor: 'pointer',
                                    color: 'skyblue',
                                    position: 'absolute',
                                    right: '6%',
                                    bottom: '5%',
                                    transition: isVibrating ? 'transform 0.1s ease-in-out' : 'none',
                                    transform: isVibrating ? 'rotate(30deg)' : 'rotate(0)',
                                }}
                            />
                        ) : (
                            <ThumbUpOutlinedIcon
                                onClick={handleClick}
                                sx={{
                                    fontSize: '2.2rem',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '6%',
                                    bottom: '5%',
                                    transition: isVibrating ? 'transform 0.1s ease-in-out' : 'none',
                                    transform: isVibrating ? 'rotate(-30deg)' : 'rotate(0)',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                }}
                            />
                        )}
                    </div>

                    {showAlert && (
                        <Alert
                            className="alert"
                            sx={{
                                marginTop: '27px',
                                marginBottom: '0px',
                                color: 'green',
                                backgroundColor: ' rgba(255, 255, 255, 1)',
                                fontWeight: '600',
                            }}
                        >
                            Link Copied
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
