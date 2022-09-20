// react
import * as React from 'react';
// @mui icon
import GithubIcon from '@mui/icons-material/GitHub';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface GithubIconLinkProps extends IconButtonProps {
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

const GithubIconLink: React.FunctionComponent<GithubIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = 'https://github.com/benscotthumphries',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label="Github button" href={href} {...otherProps}>
      <GithubIcon color={iconColor} fontSize={iconSize} />
    </IconButtonLink>
  );
};

export default GithubIconLink;
