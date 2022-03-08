import React, { useState } from "react";
import { Icon, Box, Stack, Text } from '@chakra-ui/react';
import { BiStar } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";

const Rating = React.forwardRef(
  ({ size, icon, scale, fillColor, strokeColor }, ref) => {
    const [rating, setRating] = useState(0);
    const buttons = [];

    const onClick = idx => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon = ({ fill }) => {
      return (
        <IoIosStar
          name={icon}
          size={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={onClick}
          fillOpacity={fill ? "100%" : "40%"}
        />
      );
    };

    const RatingButton = ({ idx, fill }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          variant="unstyled"
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack isInline mt={0} justify="center">
        <input name="rating" type="hidden" value={rating} ref={ref} />
        {buttons}
      
      </Stack>
    );
  }
);

Rating.displayName = "Rating";

export default Rating;
