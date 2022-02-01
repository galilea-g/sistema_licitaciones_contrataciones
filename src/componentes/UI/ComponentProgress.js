import React, { useState ,useEffect, useRef} from 'react';

import Auxi from '../../hoc/Auxi/Auxi';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

import './styles.css';

/**
 * 
 * @param text-type Text of componente progress
 * @example circule
 *          line
 *          circule_determinate
 *          line_label
 *          circule_determinate_label
 *          button_icon
 *          button_text
 * 
 * Extra params to next types:
 *          line_label { text(text): 'Ejemplo'}
 *          button_icon { icon(text): 'save' }
 *          button_text { text(text): 'Ejemplo' }
 * 
 */
const ComponentProgress = (props) => {
  const [progress, setProgress] = useState(0);
  const [progressLinear, setProgressLinear] = useState(10);
  const [progressCirculeLabel, setProgressCirculeLabel] = useState(10);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressLinear((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressCirculeLabel((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);


  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const LinearProgressWithLabel = (propsLinear) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...propsLinear} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            propsLinear.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  const CircularProgressWithLabel = (propsCircularLabel) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...propsCircularLabel} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(propsCircularLabel.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

  return (<Auxi>
    {! props.hasOwnProperty("type") && 
      <Box sx={{ width: '90%', margin: '3rem' }}>
        <LinearProgress />
      </Box> 
    }
    {props.type === "circule" && 
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    }
    {props.type === "line" && 
      <Box sx={{ width: '90%', margin: '3rem' }}>
        <LinearProgress />
      </Box>  
    }
    {
      props.type === "circule_determinate" && 
      <Box sx={{ display: 'flex' }}>
        <CircularProgress variant="determinate" value={progress} />
      </Box>
    }
    {props.type === "line_label" && 
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progressLinear} />
      </Box>
    }
    {props.type === "circule_determinate_label" &&
      <CircularProgressWithLabel value={progressCirculeLabel} />
    }
    {props.type === "button_icon" && 
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    }
    {props.type === "button_text" &&
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute'
              }}
            />
          )}
        </Button>
      </Box>
    }
  </Auxi>)
}

export default ComponentProgress;