import { useParams, useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const { category } = useParams();
  const location = useLocation();
  const { search } = location;
  const keyword = new URLSearchParams(search).get('name')

  return { category, keyword };
};
