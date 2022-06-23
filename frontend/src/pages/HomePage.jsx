import useIsThereSearchTerm from '../customHooks/useIsThereSearchTerm';
import SectionContainer from '../components/SectionContainer';
import Layout from '../components/Layout';

export default function HomePage() {
  const {isThereSearchTerm} = useIsThereSearchTerm()

  return (
    <Layout>
      {!isThereSearchTerm && (
        <SectionContainer headingText="Trending" mediaType="trending" />
      )}
      <SectionContainer headingText="Recommended" mediaType="all" />
    </Layout>
  );
}
