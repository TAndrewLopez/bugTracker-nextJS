import { useRouter } from "next/router";

const SingleBug = ({ bug }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return <div>VIEW A SINGLE BUG at {bug.id}</div>;
};

//GET SERVER SIDE PROPS WHICH WILL FETCH THE DATA AT THE TIME OF REQUEST (GET STATIC PROPS WILL FETCH AT BUILD TIME)
export const getStaticProps = async (context) => {
  const res = await fetch(`url...${context.params.id}`);
  const bug = await res.json();

  return {
    props: {
      bug,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`url...`);
  const bugs = await res.json();
  const ids = bugs.map((bug) => bug.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default SingleBug;

//GET SERVER SIDE PROPS WHICH WILL FETCH THE DATA AT THE TIME OF REQUEST (GET STATIC PROPS WILL FETCH AT BUILD TIME)
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`url...${context.params.id}`);
//   const bug = await res.json();

//   return {
//     props: {
//       bug,
//     },
//   };
// };
