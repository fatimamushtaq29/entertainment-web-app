import useIsThereSearchTerm from '../customHooks/useIsThereSearchTerm';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';
import { Context } from '../Context';
import { useContext } from 'react';

export default function BookmarkedPage() {
  const {isThereSearchTerm} = useIsThereSearchTerm();
  const { loggedInUser } = useContext(Context);

  if (!loggedInUser) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <Layout>
      {!isThereSearchTerm && (
        <>
          <SectionContainer
            headingText="Bookmarked Movies"
            mediaType="bookmarked-movies"
          />
          <SectionContainer
            headingText="Bookmarked TV Series"
            mediaType="bookmarked-series"
          />
        </>
      )}
      {isThereSearchTerm && <SectionContainer mediaType="bookmarked-all" />}
    </Layout>
  );
}
