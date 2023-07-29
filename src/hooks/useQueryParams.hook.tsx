import { useParams } from 'react-router-dom';

export const useQueryParams = () => {
  const { category, keyword } = useParams();
  // const location = useLocation();
  // const { search } = location;
  // const keyword = new URLSearchParams(search).get('name')

  return { category, keyword };
};
