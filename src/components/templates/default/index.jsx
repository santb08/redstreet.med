import Menu from '../../organisms/menu';

const DefaultTemplate = ({
  children
}) => (
  <>
    <Menu />
    {children}
  </>
)

export default DefaultTemplate;
