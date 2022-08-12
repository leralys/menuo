import { urls } from './notFound.utils';
import Logo from '../logo/Logo';
import { StyledPageContainer } from '../../styles/sharedStyles';
import { StyledLink } from './notFound.styles';

export interface INotFoundProps {
  variant: string;
}

const NotFound = ({ variant }: INotFoundProps) => {
  return (
    <StyledPageContainer>
      <Logo />
      <StyledLink to='/'>Go to Home page</StyledLink>
      <img src={urls[variant]} alt={`page-${variant}`} width={300} />
    </StyledPageContainer>
  );
};

export default NotFound;
