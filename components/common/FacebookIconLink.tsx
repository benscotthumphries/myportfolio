// react
import * as React from 'react';
// @mui icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface LinkedInIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
  | 'inherit'
  | 'action'
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const LinkedInIconLink: React.FunctionComponent<LinkedInIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = 'https://www.linkedin.com/in/benjamin-humphries/',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label="LinkedIn button" href={href} {...otherProps}>
      <LinkedInIcon color={iconColor} fontSize={iconSize} />
    </IconButtonLink>
  );
};

export default LinkedInIconLink;
